import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  @Input()
  img = 'https://pbs.twimg.com/profile_images/981519366264119296/Knw8PHrZ_400x400.jpg';

  @Input()
  backdrop = 'https://www.rkara.us/wp-content/uploads/2019/05/Road.jpg';

  @Input()
  name = 'Ryan Kara';

  @Input()
  title = 'Developer II at Hyland';

  @Input()
  tagline = 'I am a Full-stack Developer, working full-time at Hyland as a Developer. I have over five years of professional experience producing high quality responsive websites.';

  @Input()
  socialIcons = [
    {
      icon: 'fab fa-facebook',
      link: 'https://www.facebook.com/rkara.us',
    },
    {
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/RyanLKara',
    },
    {
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/ryankara/',
    },
    {
      icon: 'fab fa-wordpress',
      link: 'https://www.rkara.us/',
    },
  ]
}
