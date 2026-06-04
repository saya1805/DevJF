import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from '../../Service/api.service';
import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-user-management',
  imports: [LucideAngularModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  selectedUser = signal(false)
  apiservice = inject(ApiService)

  private getusercrsbyId$ = new BehaviorSubject<string|null>(null);

  userlist = toSignal(this.apiservice.getalluserlist() as Observable<any[]>, {initialValue: []})

  UserCrsIbyId = toSignal(this.getusercrsbyId$.pipe(filter((id:any) => id !== null),switchMap(id => {return this.apiservice.getalluserCrslistbyId(id) as Observable<any>;})),{initialValue:null})

   constructor(){
    effect(() => {
      console.log('userlist',this.userlist())
      console.log('crsuserlist',this.UserCrsIbyId())
    })
  }

  openUsercourse(id:any){
    this.selectedUser.set(true)
     this.getusercrsbyId$.next(id)
  }

  closeusercourse(){
    this.selectedUser.set(false)
  }

}
