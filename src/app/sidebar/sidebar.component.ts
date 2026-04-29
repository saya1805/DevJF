import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CoursesModule } from '../courses/courses.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [LucideAngularModule,RouterLink,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
public Plans = signal(false)
public selectedOption:any = signal('dashboard')
public openSettings = signal(false)
public openCourses = signal(false)

private Roles = localStorage.getItem('roles')

adminboss = false

  openplan(){
    this.Plans.update(state => !state);
  }

  opensettings(){
    this.openSettings.update(state => !state)
  }

  opencourse(){
    this.openCourses.update(state => !state)
  }

  selectedTab(tab:any){
    this.selectedOption.set(tab)
  }

  constructor(){
    if(this.Roles == "Admin"){
      this.adminboss = true
    }else{
      this.adminboss = false
    }
  }

}
