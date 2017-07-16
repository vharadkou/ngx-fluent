import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from './components';

import { ExamplesComponent } from './examples';

@NgModule({
    imports: [
        BrowserModule,
        ComponentsModule
    ],
    declarations: [ExamplesComponent],
    bootstrap: [ExamplesComponent]
})
export class AppModule { }
