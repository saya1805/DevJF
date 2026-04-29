import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ApiService } from '../Service/api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule,CommonModule,RouterLink,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public apiservice = inject(ApiService)
  private Roles = localStorage.getItem('roles')
  mainBoss = true

    userlist = toSignal(this.apiservice.getalluserlist() as Observable<any[]>, {initialValue: []})

  constructor(){
    effect(() => {
      console.log('roles',this.Roles)
      console.log('userlist',this.userlist())
      if(this.Roles == 'Admin'){
        this.mainBoss = true
      }else{
        this.mainBoss = false
      }
    })
  }

  getProfileImageUrl(url: string | null): string {
  // १. जर काहीच नसेल (null), तर डिफॉल्ट इमेज द्या
  if (!url) {
    return '/user.jpg'; // तुमच्या प्रोजेक्टमधील डिफॉल्ट इमेज
  }

  // २. जर पाथ आधीच '/' ने सुरू होत असेल (उदा. /uploads/...)
  if (url.startsWith('/')) {
    return 'https://localhost:7018' + url;
  }

  // ३. जर फक्त फाइलचे नाव असेल, तर 'uploads/' जोडा
  return 'https://localhost:7018/uploads/' + url;
}

getInitials(name: string): string {
  if (!name) return 'U'; // जर नाव नसेल तर डिफॉल्ट 'U' (User)
  return name.charAt(0).toUpperCase();
}

}
