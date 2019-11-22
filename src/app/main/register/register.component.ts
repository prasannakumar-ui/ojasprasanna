import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {TreService} from '../tre.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private s:TreService) { }
rform=this.fb.group({
  firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  gender:['',[Validators.required]],
  email:['',[Validators.required]],
  username:['',[Validators.required]],
  mobilenumber:['',[Validators.required]],
  courses:['',[Validators.required]],
  addresses:this.fb.array([
    this.fb.group({
         city:['',[Validators.required]],
          state:['',[Validators.required]],
          village:['',[Validators.required]],
          pincode:['',[Validators.required]]
        })
      ])
  

})

pos(){
  this.s.pr(this.rform.value).subscribe(res=>console.log(res));
  this.rform.reset()
}


  ngOnInit() {
  }

}
