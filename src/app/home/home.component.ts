import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductosComponent } from "../productos/productos.component";
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, ProductosComponent,RouterLink,MatMenuModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  user: User | null = null;
  constructor(private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }
  logout() {
    this.authService.clearCurrentUser();
    this.router.navigate(['/login']);
  }
}
