import { Injectable } from '@angular/core';

@Injectable()
export class GameFieldService {

  size: number;
  matrix: any;

  constructor(size) {
    this.size = size;
    this.initialize();
  }

  initialize() {
    this.matrix = [];
    for (let i = 0; i < this.size; ++i) {
      this.matrix[i] = [];
      for (let j = 0; j < this.size; ++j) {
        this.matrix[i][j] = {value: 0, opened: false};
      }
    }
  }

  setValue(i, j, value) {
    this.matrix[i][j].value = value;
  }

  getValue(i, j) {
    let ref = this.matrix[i][j];
    if (!ref) {
      console.log(i, j);
    }
    return this.matrix[i][j].value;
  }

  opened(i, j) {
    return this.matrix[i][j].opened;
  }



  totalSum() {
    let sum = 0;
    for(let i = 0; i < this.size; ++i){
      for(let j = 0; j < this.size; ++j){
        sum+=this.matrix[i][j].value;
      }
    }

    return sum;
  }

}
