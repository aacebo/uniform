export const SIDENAV_EXAMPLE = `
<uni-sidenav-container>
  <uni-sidenav
    [(open)]="open"
    [mode]="mode"
    [position]="position"
  >
    <ng-template uniSidenavBody>
      sidenav content
    </ng-template>
  </uni-sidenav>

  <uni-sidenav-content>
    <button uni-button
            (click)="toggle()">
      Toggle
    </button>
  </uni-sidenav-content>
</uni-sidenav-container>
`;
