import { Component, inject } from '@angular/core';
import { CustmizeToastService } from './custmize-toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custmize-toast',
  imports: [CommonModule],
  templateUrl: './custmize-toast.component.html',
  styleUrl: './custmize-toast.component.css'
})
export class CustmizeToastComponent {
toastService = inject(CustmizeToastService);
}
