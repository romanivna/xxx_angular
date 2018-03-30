import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';
import { EngineModule } from '../engine/engine.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ControllerModule {

  UI: any;
  Engine: any;
  totalAmount: number;
  level: number;
  n: number;
  cellItemArray: any;
  goldItemArray: any;
  rotateRingItemArray: any;
  matrix: any;


  constructor() {
  this.UI = new UiModule();
  this.Engine = new EngineModule();
  this.totalAmount = 0;
  this.level = 1;
  this.n = this.Engine.clicks;
}

  //noinspection JSAnnotator
  init() {

console.log('oki-doki')
    for(let i=0;i<5;i++){
      for (let j=0; j<5;j++) {
        console.log(i,j)
        let newCell = document.createElement('div');
        newCell.setAttribute('data-col', i);
        newCell.setAttribute('data-row', j);
        newCell.classList.add('cell-item');
        let divCells = document.querySelector('.cells');
        let last = divCells.lastChild;
        divCells.insertBefore(newCell, last);
      }
    }

    this.cellItemArray = document.querySelectorAll('.cell-item');
    this.cellItemArray.forEach((el) => {
      // if(el.children.length>0){
      //   el.children[0].remove()
      //   let col = el.getAttribute('data-col');
      //   let row = el.getAttribute('data-row');
      //   el.removeEventListener('click', () => { this.openCellHandler(col,row) })
      //
      // }
      let newImg = document.createElement('img');
      newImg.setAttribute('src','ring.a8ee592323d892823320.png');
      newImg.style.width = '100%';
      el.insertBefore(newImg, el.children[0]);
      // el.style.background = 'none';
      // el.classList.remove('cell-item');
      // el.classList.add('cell-item')
    });

    console.log('ok')
    console.log('total amount: ',  this.totalAmount, )

    this.matrix = this.Engine.getMatrix();
    this.UI.showEntireMatrix(this.matrix);
    this.UI.showGoal(this.Engine.getSuccessRate());
    this.n = this.Engine.clicks;
    this.UI.showCountOfClicks(this.n);

    this.UI.showCurrentLevel(this.level);
    alert('Are you ready?');

    this.print()
  }

  reset() {
    ///////////////    УДАЛЯТЬ ИЗ ДОМА И ВОЗВРАЩАТЬ НАЗАД   ///////////////////
    this.UI = new UiModule();
    this.Engine = new EngineModule();
    this.totalAmount = 0;
    this.n = 0;

    this.UI.showScore(0)

    this.cellItemArray = document.querySelectorAll('.cell-item');
    this.cellItemArray.forEach((el) => {
        el.remove()
    });


    // `<div class="cell-item" data-col="${col}" data-row="${row}"></div>`


    this.goldItemArray = document.querySelectorAll('.gold');
    this.goldItemArray.forEach((el) => {
       el.innerHTML = '';
    });
    // this.rotateRingItemArray = document.querySelectorAll('.rotateRing');
    //   this.rotateRingItemArray.forEach((el) => {
    //   el.classList.remove('rotateRing');
    // })

  }

  print(){
    this.cellItemArray = document.querySelectorAll('.cell-item');
    this.cellItemArray.forEach((item, i) => {

      let col = item.getAttribute('data-col');
      let row = item.getAttribute('data-row');
      item.addEventListener('click', () => { this.openCellHandler(col,row)})
    })
  }


  openCellHandler(i, j) {
    let isOpen = this.UI.isMatrixOpen; //default - false

    if (isOpen) {
      return;
    }
    let matrix = this.Engine.getMatrix();
    let amount = matrix.getValue(i, j);
    this.totalAmount += amount;
    this.n--; //count user's possible click
    this.UI.showCountOfClicks(this.n)

    if(this.totalAmount < this.Engine.getSuccessRate()){

      if (this.n < 1) {
        this.UI.openCell(i, j, amount, this.totalAmount);
        this.UI.levelFailed();


      }
    }




    if (this.totalAmount > this.Engine.getSuccessRate()) {
      this.UI.openCell(i, j, amount, this.totalAmount); //open cell
      this.UI.showScore(this.totalAmount);
       this.level+=1;
      this.UI.levelSuccess(this.level);
      this.totalAmount = 0;
      // this.Engine.startNextLevel();
      // let matrix = this.Engine.getMatrix();
      // this.UI.showEntireMatrix(matrix);
      this.reset();
      this.init();
    } else {

      this.UI.openCell(i, j, amount, this.totalAmount); //open cell
      this.UI.showScore(this.totalAmount);
      //this.UI.showEntireMatrix(matrix);
    }
  }


}


