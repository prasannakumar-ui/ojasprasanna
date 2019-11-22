import { Component, OnInit } from '@angular/core';

import {TreService} from '../tre.service';
@Component({
  selector: 'app-empupd',
  templateUrl: './empupd.component.html',
  styleUrls: ['./empupd.component.css']
})
export class EmpupdComponent implements OnInit {
  fdata;



  constructor(private s:TreService) { }

  ngOnInit() {
  this.ges()
  }
  ges(){
    this.s.ge().subscribe(res=>this.fdata=res);
    
   }

   
}
