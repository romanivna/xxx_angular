import { Component, OnInit } from '@angular/core';
import {ControllerModule} from "../controller/controller.module";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  controller : ControllerModule;

  constructor(controller: ControllerModule) {
    this.controller = controller;
  }

  ngOnInit() {

      document
        .querySelector('.startButton')
        .addEventListener('click', () => {

          this.controller.level = 1;
          this.controller.reset();
          this.controller.init()
        });

  }

}
