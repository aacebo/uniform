export const TOOLBAR_EXAMPLE = `
<uni-toolbar
  *ngFor="let color of colors"
  [color]="color"
>
  <span class="spacer">{{ color }}</span>
  <span>Right</span>
</uni-toolbar>

<uni-toolbar>
  <span class="spacer">default</span>
  <span>Right</span>
</uni-toolbar>
`;
