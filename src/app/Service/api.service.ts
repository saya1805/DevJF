import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient)
  public apiurl = "https://localhost:7018/api/Auth"

  token = signal<string|null>(localStorage.getItem('user_token'))

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
        if(res.token){
          localStorage.setItem('user_token',res.token)
          this.token.set(res.token)
        }
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

  constructor() { }

 
}
