import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-home-view',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
})
export class HomeView implements OnInit {
  links = [
    {
      label: 'Sign Up',
      route: '/sign-up',
    },
    {
      label: 'Checkout',
      route: '/checkout',
    },
    {
      label: 'Landing Page',
      route: '/landing-page',
    },
    {
      label: 'Application Icon',
      route: '/application-icon',
    },
    {
      label: 'User Profile',
      route: '/user-profile',
    },
  ];
  constructor() { }

  ngOnInit() { }
}
