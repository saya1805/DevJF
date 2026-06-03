import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from '../../Service/api.service';
import { Observable } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-user-management',
  imports: [LucideAngularModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  selectedUser = signal(true)
  apiservice = inject(ApiService)

  userlist = toSignal(this.apiservice.getalluserlist() as Observable<any[]>, {initialValue: []})

   constructor(){
    effect(() => {
      console.log('userlist',this.userlist())
    })
  }

  openUsercourse(){
    this.selectedUser.set(true)
  }

  closeusercourse(){
    this.selectedUser.set(false)
  }

}
