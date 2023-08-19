import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent {
  userMessage = {
    email: '',
    textarea: '',
  };

  constructor(public themeService: ThemeService) {}

  message() {
    console.log(this.userMessage);
  }
}
