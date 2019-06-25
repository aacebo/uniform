import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ISidenavItem } from './features/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly $toggle = new BehaviorSubject(false);
  readonly sidenavItems: ISidenavItem[] = [
    { text: 'Card', route: '/components/card' },
    { text: 'Button', route: '/components/button' },
    { text: 'Icon', route: '/components/icon' },
    { text: 'Toolbar', route: '/components/toolbar' },
    { text: 'Sidenav', route: '/components/sidenav' },
    { text: 'Tooltip', route: '/components/tooltip' },
    { text: 'Popover', route: '/components/popover' },
    { text: 'Toast', route: '/components/toast' },
    { text: 'Select', route: '/components/select' },
    { text: 'Input', route: '/components/input' },
    { text: 'Menu', route: '/components/menu' },
    { text: 'Context Menu', route: '/components/context-menu' },
    { text: 'Dialog', route: '/components/dialog' }
  ];
}
