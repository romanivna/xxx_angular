import { Injectable } from '@angular/core';

@Injectable()
export class RandomizerService {

  constructor() { }

  fillMatrix(matrix, max, min){
    let len = matrix.size;
    for (let i = 0; i < len; i++){
      for (let j = 0; j < len; j++) {
        matrix.setValue(i,j, Math.floor(Math.random() * (max - min) + min));
      }
    }
    return matrix;
  }

}
