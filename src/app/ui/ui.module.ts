import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UiModule {

  isMatrixOpen: boolean;
  TIME: number;
  startButton: any;
  nextButton: any;
  matrixCells: any;
  cellItemArray: any;
  goldItemArray: any;
  isCellBlocked: boolean;

  constructor() {
    this.isMatrixOpen = false;
    this.TIME = 2000;
    this.startButton = document.querySelector('.startButton');
    this.nextButton = document.querySelector('.nextButton');
  }

  levelStart(level) {
    // get current level
    // this.startButton.disabled = true;
    // this.nextButton.style.display = none;
    alert('start new level');
  }

  levelSuccess(level) {
    alert('go to the nex level');
    this.showCurrentLevel(level);
    // this.showGoal('');
    // this.showScore('');
    // this.showCountOfClicks('');
    // this.levelStart(level);
    // this.nextButton.style.display = block;
  }

  levelFailed() {
     alert('you are failed, try again');
    this.isCellBlocked = true;
    // this.startButton.disabled = false;
    // this.nextButton.style.display = 'none';
  };


  openCell(i, j, amount, totalAmount) {

      // i, j - box address, amount - gold in box, totalAmount - sum of golg from open boxes
      this.cellItemArray = document.querySelectorAll('.cell-item');
      this.cellItemArray.forEach((item) => {
        let col = item.getAttribute('data-col');
        let row = item.getAttribute('data-row');
        if (col == i && row == j) {
          console.log(item)
          // item.removeAttribute('class');
          // item.setAttribute('class', 'cell-item rotateRing');
          item.childNodes[0].style.display = 'none';
          setTimeout(() => {
            item.childNodes[0].style.background = 'none';
          }, 0);
          setTimeout(() => {
            item.childNodes[1].style.display = 'block';
            // item.childNodes[0].style.transform = 'rotate(180deg)';
          }, 0)
        }
      })
  }

  showEntireMatrix(matrix) {
    this.matrixCells = document.querySelectorAll('.cell-item');
    //show matrix at start and close it for play
    try {
      this.matrixCells.forEach((element, index) => {
        element.style.background = 'none'
        element.innerHTML = `<p class="gold"> ${matrix.getValue(
          Math.floor(index / matrix.size),
          index % matrix.size
        )} </p>`;
        element.addEventListener('click', () => {
        });
      });
    } catch (e) {
    }
    this.isMatrixOpen = true;

    setTimeout(() => {
      this.isMatrixOpen = false;
      this.goldItemArray = document.querySelectorAll('.gold')
      this.goldItemArray.forEach((item) => {
          item.style.display = 'none';
          // item.parentNode.removeAttribute('class');
          // item.parentNode.setAttribute('class','cell-item background');
        })
      this.matrixCells.forEach((element, index) => {
        // element.style.background = 'none'
        let newImg = document.createElement('img');
        newImg.setAttribute('src','ring.a8ee592323d892823320.png');
        newImg.style.width = '100%';
        element.insertBefore(newImg, element.children[0]);
        // element.childNodes[1] = `<img class="background" src='ring.a8ee592323d892823320.png'> </img>`;
        // element.childNodes[1].style.width = '100%'
        console.log(element.childNodes[0].style.width)
      })
    }, this.TIME);
  }

  showGoal(goal) {
    document.querySelector('.goal-value').innerHTML = goal;
  }

  showCountOfClicks(clicks) {
    document.querySelector('.clicks-value').innerHTML = clicks;
  }

  showCurrentLevel(level) {
    document.querySelector('.level-value').innerHTML = level;
  }

  showScore(score) {
    document.querySelector('.score-value').innerHTML = score;
  }

}
