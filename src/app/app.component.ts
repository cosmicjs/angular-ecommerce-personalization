import { Component, OnInit } from '@angular/core';
import { CosmicService } from './core/_services/cosmic.service';
import { User } from '@models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cosmic-Customization Commerce';

  constructor(private cosmicService: CosmicService) {}

  ngOnInit() {
    this.setSessionID();
  }

  setSessionID() {
    let sessionID = localStorage.getItem('sessionID');

    if (!localStorage.getItem('sessionID')) {
      const user = new User();

      sessionID = Math.random()
        .toString(36)
        .substr(2, 9);

      localStorage.setItem('sessionID', sessionID);
      user.sessionid = sessionID;

      this.cosmicService.setUser(user).subscribe(user => {
        sessionStorage.setItem('user', JSON.stringify(user));
      });
    }
  }
}
