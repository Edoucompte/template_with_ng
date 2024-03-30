import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdviceComponent } from './advice/advice.component';
import { CourseComponent } from './course/course.component';
import { SaleComponent } from './sale/sale.component';
import { RateComponent } from './rate/rate.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AdviceComponent, CourseComponent, 
    SaleComponent, RateComponent, NewsletterComponent, FooterComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'homes';

  ngOnInit(){
  }
}
