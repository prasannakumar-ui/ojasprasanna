import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TreService} from '../tre.service';
import {FormBuilder}from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fdata;
  url;
  


  constructor(private router:Router, private s:TreService , private fb:FormBuilder,private sa:DomSanitizer) { }
uform=this.fb.group({
  id:[],
  name:[],
  age:[],
  salary:[],
  designation:[],
  img:[],
})
  ngOnInit() {
    this.ges()
  }
load(){
  this.router.navigate([''])
  }

ges(){
  this.s.ge().subscribe(res=>this.fdata=res);
}
edi(c){
  var obj={
   
    "name":this.uform.value.name,
    "age":this.uform.value.age,
    "salary":this.uform.value.salary,
    "designation":this.uform.value.designation,
    "img":this.url
  }
 this.uform.patchValue({
   id:c.id,
   name:c.name,
   age:c.age,
   salary:c.salary,
   designation:c.designation,
   img:c.img,

 })
}
su(){
  var obj={
   
    "name":this.uform.value.name,
    "age":this.uform.value.age,
    "salary":this.uform.value.salary,
    "designation":this.uform.value.designation,
    "img":this.url
  }
  this.s.po(obj).subscribe(res=>this.ges());
  
  this.uform.reset()
}

pus(){
 
  this.router.navigate(['empupd']);
  this.s.pu(this.uform.value).subscribe(ress=>this.ges());
  this.uform.reset()
 
}
des(c){
  this.s.de(c.id).subscribe(red=>this.ges())
}
onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event:Event) => { // called once readAsDataURL is completed
      this.url = reader.result;      
      localStorage.setItem('imgurl',this.url)
console.log(this.url)
    }

  }
 
}
base64Image:string;
transform(){
return this.sa.bypassSecurityTrustResourceUrl(this.base64Image=this.url);
}
}


