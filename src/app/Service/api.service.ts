import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient)
  public apiurl = "https://localhost:7018/api/Auth"
  public crsapiUrl = "https://localhost:7018/api/"

  token = signal<string|null>(typeof window !== 'undefined' ? localStorage.getItem('user_token') : null)

  resgister(credentials:any){
    return this.http.post<any>(`${this.apiurl}/signin`,credentials).pipe(
      tap(res => {
        if(res.token){
          localStorage.setItem('user_token',res.token)
          this.token.set(res.token)
        }
      })
    )
  }

  login(credentials:any){
    return this.http.post<any>(`${this.apiurl}/loginuser`,credentials).pipe(
     tap(res => {
      // console.log(res.Roles)
        if(res.token){
          localStorage.setItem('user_token',res.token)
          this.token.set(res.token)
        }
      })
    )
  }

  getalluserlist(){
    return this.http.get(this.apiurl+`/get-users`).pipe(
      tap(res => {
        console.log(res)
      })
    )
  }

  logout(){
    localStorage.removeItem('user_token')
    this.token.set(null)
  }

  handleAuthentication(res:any){
    if(res.token){
      localStorage.setItem('user_token',res.token)
      this.token.set(res.token)
    }
  }

  getCrs(){
    return this.http.get(this.crsapiUrl +'Course')
  }

  getCrsbyId(id:any){
    return this.http.get(this.crsapiUrl +`Course/GetcrsI/${id}`)
  }

  sendOtp(mail:any){
    return this.http.post<any>(this.apiurl+`/SendOtp?email=${mail}`,{}).pipe(
      tap( res => {
        console.log(res)
      })
    )
  }

  verifyOtp(mail:any,otp:any){
    return this.http.post<any>(this.apiurl+`/VerifyOtp?email=${mail}&Otp=${otp}`,{}).pipe(
      tap(res => {
        console.log(res)
      })
    )
  }


  userprofileurl(file:File){
    const formdata = new FormData();
    formdata.append('file',file)
    return this.http.post(`${this.apiurl}/UpdateprofilePicture`,formdata);
  }

  constructor() { }

 
}
