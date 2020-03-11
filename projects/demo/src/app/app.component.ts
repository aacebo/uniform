import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ISidenavItem } from './features/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  open = true;

  readonly sidenavItems: ISidenavItem[] = [
    {
      text: 'Buttons/Indicators',
      icon: 'mdi-circle-outline',
      expanded: true,
      routes: [
        { text: 'Button', route: '/components/button' },
        { text: 'Icon', route: '/components/icon' },
        { text: 'Progress', route: '/components/progress' },
        { text: 'Badge', route: '/components/badge' },
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
        { text: 'Tab', route: '/components/tab' },
        { text: 'Split', route: '/components/split' },
        { text: 'Scroll', route: '/components/scroll' },
        { text: 'Grid', route: '/components/grid' },
      ],
    },
    {
      text: 'Form Controls',
      icon: 'mdi-keyboard-outline',
      expanded: true,
      routes: [
        { text: 'Input', route: '/components/input' },
        { text: 'Select', route: '/components/select' },
        { text: 'Checkbox', route: '/components/checkbox' },
        { text: 'Slide Toggle', route: '/components/slide-toggle' },
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
        { text: 'Context Menu', route: '/components/context-menu' },
      ],
    },
    {
      text: 'Code',
      icon: 'mdi-code-tags',
      expanded: true,
      routes: [
        { text: 'Marked', route: '/components/marked' },
        { text: 'Code', route: '/components/code' },
        { text: 'Json Tree', route: '/components/json-tree' },
      ],
    },
  ];
}
