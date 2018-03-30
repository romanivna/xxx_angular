import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RandomizerService} from './randomizer.service';
import {GameFieldService} from "./game-field.service";
import {EvaluateService} from "./evaluate.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EngineModule {
  matrix: any;
  randomizer: RandomizerService;
  clicks: number;
  currentSuccessRate: number;
  nsr: number;
  sr: number;
  GameField: any;
  evaluate: number;

  constructor() {
    this.sr = 0.2;
    this.init(this.sr);
  }

  getSuccessRate(){
    return Math.ceil(this.matrix.totalSum() * this.currentSuccessRate)
  }

  startNextLevel() {
    this.nsr  = this.currentSuccessRate + 0.05;
    this.init(this.nsr);
  }

  getMatrix(){
    return this.matrix;
  }

  init(sr) {
    this.currentSuccessRate = sr;
    this.matrix = new GameFieldService(5);
    //noinspection TypeScriptValidateTypes
    this.randomizer = new RandomizerService();
    this.randomizer.fillMatrix(this.matrix, 10, 1000);
    //noinspection TypeScriptValidateTypes\
    // this.eval = EvaluateService;
     this.evaluate = new EvaluateService(this.matrix, this.getSuccessRate());
    this.clicks = this.evaluate.counter;
  }
}
