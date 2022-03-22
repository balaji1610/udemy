import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.components.html',

})
export class ServerComponent {

title ='Developer';

ServerId:number=10;
ServerStatus:string='Offline';


constructor(){
this.ServerStatus = Math.random() > 0.5 ? 'Online':'Offline';

}

getSeverStatus(){
  return this.ServerStatus;
}

getColor(){
  this.ServerStatus === 'Online' ? 'Green':'Red';
}
name:string='balaji';

getDataInterpolation(){

  return "Hello "+this.name;
}

}//end
