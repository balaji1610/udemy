import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.components.html',

})
export class ServerComponent {

title ='Developer';

ServerId:number=10;
ServerStatus:string='Offline';

name:string='balaji';

getDataInterpolation(){

  return "Hello "+this.name;
}



}
