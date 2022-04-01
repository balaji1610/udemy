import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .bg{
      color:red;
    }.alignText{
      text-align:center;
    }

  `]
})
export class AppComponent {
  title = 'udemy';
  // public name:string;
  name='';

}
