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
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

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
  users:User[]=[];
  password: string = '';
  loginError: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = signal(true);
  constructor(private router: Router, private userService:UserService,private authService:AuthService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe( (data:User[]) =>{
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
      this.authService.setCurrentUser(user);
      this.router.navigate(['/home']); // Redirige a la ruta 'home'
    } else {
      this.loginError = true; // Muestra mensaje de error si no coincide
    }
  }
}
