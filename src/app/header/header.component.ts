import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', ]
})
export class HeaderComponent implements OnInit {

  loginClicked !: Boolean;
  signupClicked !: Boolean;
  menuClicked !: Boolean;


  ngOnInit(): void {
    this.loginClicked= false;
    this.signupClicked= false;
    this.menuClicked= false;
  }

  toggleLogin(): void{
    this.loginClicked = !this.loginClicked;
    this.signupClicked = false;
    this.menuClicked = false;
  }

  toggleSignup(): void{
    this.signupClicked = !this.signupClicked;
    this.loginClicked = false;
    this.menuClicked = false;
  }

  toggleMenu(): void{
    this.signupClicked = false;
    this.loginClicked = false;
    this.menuClicked = !this.menuClicked;
  }
}