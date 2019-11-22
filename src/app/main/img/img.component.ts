import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { TreService } from '../tre.service';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor(private s:TreService, private fb:FormBuilder) { }
  reactive=this.fb.group({
    img:[''],
  
  })
  ngOnInit() {
  }

}
