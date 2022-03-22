import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   servername = 'The Start';
  allowNewServer = false;
  serverCreationStatus = "No server was Created"
constructor() {
setTimeout(()=>{
this.allowNewServer = true;
},5000)

} // Property Binding

onCreateServer(){
this.serverCreationStatus = "The Server Was created"

}


onUpdateServerName(event:Event){
this.servername = (<HTMLInputElement>event.target).value;

}

  ngOnInit(): void {
  }

}
