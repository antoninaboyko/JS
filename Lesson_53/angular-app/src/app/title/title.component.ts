import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1 class="title">{{title}}</h1>`,
  styles: [`
  .title{
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px;
    with: fit-content;
    color: #fff;
    text-align: center;
  }
  `]
})
export class TitleComponent {
  title = "Main title"
}
