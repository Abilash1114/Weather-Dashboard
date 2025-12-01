import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

dailyUpdate=[
  {
    day:'SAT',temp:'21',icon:'assets/images/sun.png'
  },
  {
day:'SUN',temp:'21',icon:'assets/images/sun.png'
  },
  {
    day:'MON',temp:'21',icon:'assets/images/sun.png'
  },
  {
    day:'TUE',temp:'21',icon:'assets/images/sun.png'
  },
  {
    day:'WEN',temp:'21',icon:'assets/images/sun.png'
  },
  {
    day:'THU',temp:'21',icon:'assets/images/sun.png'
  }
]

}
