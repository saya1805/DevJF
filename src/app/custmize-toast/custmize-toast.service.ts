import { Injectable, signal } from '@angular/core';

export interface toastemessage{
  message:string,
  type:'success' | 'error' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class CustmizeToastService {

  toast = signal<toastemessage | null>(null);

  constructor() { }

  show(message: string,type:'success' | 'error' | 'info' = 'success'){
    this.toast.set({message, type});
    setTimeout(() =>{
      this.clear();
    },4000)
  }

  clear(){
    this.toast.set(null)
  }
}
