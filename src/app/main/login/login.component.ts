import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreService } from '../tre.service';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private s:TreService, private fb:FormBuilder) { }
lform=this.fb.group({
  username:['',[Validators.required,Validators.minLength(3)]],
  password:['',[Validators.required,Validators.minLength(3)]]
})
  ngOnInit() {

  }
  login(){
  
    this.router.navigate(['dashboard']);
    this.s.pd(this.lform.value).subscribe(res=>console.log(res));
    this.lform.reset()
  }

 
}
