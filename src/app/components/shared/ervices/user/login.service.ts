import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { serviceURL } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient:HttpClient) { }

 login(userEmail:string,userPassword:string):Observable<any>{
   if(!userEmail && !userPassword){
     console.log("the user email is not valid")
     return of(null)
   }
   return this._HttpClient.post(
    serviceURL.User.login,
    {
      email:userEmail,
      password: userPassword
    })

 }


 Register(userName:string,UserEmail:string,userPassword:string):Observable<any>{
  if(!userName && !UserEmail && !userPassword ){
    console.log("ples enter userName and Email and password")
     return of(null)
  }
  return this._HttpClient.post(serviceURL.User.Registertion,{
     name:userName,
     email:UserEmail,
     password:userPassword
   })
 }
 
 
 


}
