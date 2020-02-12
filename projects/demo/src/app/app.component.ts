import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ISidenavItem } from './features/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly toggle$ = new BehaviorSubject(true);
  readonly sidenavItems: ISidenavItem[] = [
    {
      text: 'Buttons/Indicators',
      icon: 'mdi-circle-outline',
      expanded: true,
      routes: [
        { text: 'Button', route: '/components/button' },
        { text: 'Icon', route: '/components/icon' },
        { text: 'Progress', route: '/components/progress' },
      ],
    },
    {
      text: 'Layout',
      icon: 'mdi-view-dashboard',
      expanded: true,
      routes: [
        { text: 'Card', route: '/components/card' },
        { text: 'Toolbar', route: '/components/toolbar' },
        { text: 'Sidenav', route: '/components/sidenav' },
      ],
    },
    {
      text: 'Form Controls',
      icon: 'mdi-keyboard-outline',
      expanded: true,
      routes: [
        { text: 'Select', route: '/components/select' },
        { text: 'Input', route: '/components/input' },
      ],
    },
    {
      text: 'Overlays',
      icon: 'mdi-checkbox-multiple-blank',
      expanded: true,
      routes: [
        { text: 'Tooltip', route: '/components/tooltip' },
        { text: 'Popover', route: '/components/popover' },
        { text: 'Toast', route: '/components/toast' },
        { text: 'Dialog', route: '/components/dialog' },
      ],
    },
    {
      text: 'Code',
      icon: 'mdi-code-tags',
      expanded: true,
      routes: [

      ],
    },
  ];
}
