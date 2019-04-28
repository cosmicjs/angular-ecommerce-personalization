import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { CosmicService } from './cosmic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private cosmicService: CosmicService) {}

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
        this.setSessionUser(user);
      });
    }
  }

  setSessionUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  updateSessionUser(user: User) {}

  getSessionUser(): User {
    const user = sessionStorage.getItem('user');

    if (user) {
      return Object.assign(new User(), JSON.parse(user));
    }
  }
}
