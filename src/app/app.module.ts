import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GendalfComponent } from './gendalf/gendalf.component';
import { FieldComponent } from './field/field.component';

import {EngineModule} from "./engine/engine.module";
import {UiModule} from "./ui/ui.module";
import {EvaluateService} from "./engine/evaluate.service";
import {GameFieldService} from "./engine/game-field.service";
import {RandomizerService} from "./engine/randomizer.service";
import {FieldService} from "./field/field.service";

import {ControllerModule} from "./controller/controller.module";




@NgModule({
  declarations: [
    AppComponent,
    GendalfComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    ControllerModule
  ],
  providers: [
    EngineModule,
    UiModule,
    FieldService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
