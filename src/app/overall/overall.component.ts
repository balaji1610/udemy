import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent implements OnInit {
  // @Input() message:string;

  @Input()message="";
  constructor() { }

  ngOnInit(): void {
  }

 data ="Click a button Add Your List";

  addMethod(){

this.data = "Pls Enter Your List ";

var listmenu:string = prompt("Enter Your Menu List"," ")

var listMenuLength = listmenu.length;

if(listMenuLength<=1){

  return alert("Not Vaild")
}else{

  alert(listMenuLength)
}


 }
 twoWayBinding ="";

namList = "";
greetingsName ="Your Name"
nameMethod(){
this.greetingsName ="Hello "+this.namList;
}

dataV2 = "";
loopStatement = false;
clickButton(){
this.loopStatement = true;

}

serverElements = [];
newServerName = '';
newServerContent = '';

onAddServer() {
  this.serverElements.push({
    type: 'server',
    name: this.newServerName,
    content: this.newServerContent
  });
}

onAddBlueprint() {
  this.serverElements.push({
    type: 'blueprint',
    name: this.newServerName,
    content: this.newServerContent
  });
}




}  //end
