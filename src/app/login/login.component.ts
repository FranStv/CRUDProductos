import { Component ,OnInit,signal} from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../services/user.service';
const testUsers = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'pass456' },
  { email: 'user3@example.com', password: 'test789' },
  { email: 'admin@example.com', password: 'adminPass' },
  { email: 'guest@example.com', password: 'guest123' },
  { email: 'developer@example.com', password: 'devSecret' },
  { email: 'tester@example.com', password: 'testPass' },
  { email: 'user4@example.com', password: 'secure456' },
  { email: 'support@example.com', password: 'support123' },
  { email: 'client@example.com', password: 'clientPass' }
];
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule,MatCardModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatIconModule,MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  users:any[]=[];
  password: string = '';
  loginError: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = signal(true);
  constructor(private router: Router, private userService:UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe( data =>{
      this.users = data;
    });
  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  login() {
    const email = this.emailFormControl.value;
    const password = this.password;
    // Verificar si las credenciales coinciden con algún usuario en testUsers
    const user = this.users.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      this.loginError = false; // Si se encuentra el usuario, no hay error
      this.router.navigate(['/home']); // Redirige a la ruta 'home'
    } else {
      this.loginError = true; // Muestra mensaje de error si no coincide
    }
  }
}
