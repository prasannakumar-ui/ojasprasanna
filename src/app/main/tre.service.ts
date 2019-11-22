import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TreService {

  constructor(private h:HttpClient) { }
  po(a){
    return this.h.post('http://localhost:3000/posts',a)
  }
  ge(){
    return this.h.get('http://localhost:3000/posts')
  }
pu(c){
    return this.h.put('http://localhost:3000/posts/'+ c.id,c)
  }
  de(a){
    return this.h.delete('http://localhost:3000/posts/' + a)
  }
  pd(a){
    return this.h.post('http://localhost:3000/user',a)
  }
  pr(a){
    return this.h.post('http://localhost:3000/reg',a)
  }
  
}
