import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username && this.password) {
      this.router.navigate(['/music']);
    } else {
      alert('Please fill in all fields');
    }
  }
}
