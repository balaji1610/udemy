import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  fetchData = false;
constructor() {
setTimeout(()=>{
this.fetchData = true;
},5000)

} // Property Binding

  ngOnInit(): void {
  }

}
