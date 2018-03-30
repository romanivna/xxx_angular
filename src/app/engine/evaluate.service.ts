import { Injectable } from '@angular/core';

@Injectable()
export class EvaluateService {

  arr: any[];
  sum: number;
  min: number;
  max: number;
  rateSum: number;
  arrMax: any;
  counter: any;

  constructor(matrix, rate) {
    this.arr = [];
    this.sum = matrix.totalSum();
    for(let i = 0; i < matrix.size; i++){
      for(let j = 0; j < matrix.size; j++){
        this.arr.push(matrix.getValue(i,j));
      }
    }
    // arr = arr.sort((a,b)=>a-b);
    // console.log(arr)
    // let acc = 0;
    // let i = 0
    // for (i = 0; i <matrix.size * matrix.size && i < acc / sum < rate; ++i) {
    //     acc += arr[i];
    // }
    // return (matrix.size * matrix.size - i) + 1;

    this.min = this.arr[0];
    this.max = 0;
    this.rateSum = 0;
    this.arrMax = [];
    this.counter = 1;
    for (let i = 1; i < this.arr.length; ++i) {
      if (this.arr[i] > this.max && (this.rateSum += this.arr[i]) < rate) {
        this.max = this.arr[i];
        this.arrMax.push(this.max);
        this.counter++;
      }
    }
    // console.log(this.counter);
    return this.counter;
  }

}
