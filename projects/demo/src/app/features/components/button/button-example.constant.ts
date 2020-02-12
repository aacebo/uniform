export const BUTTON_EXAMPLE = `
<h4>Button</h4>

<button uni-button
        *ngFor="let color of colors"
        [color]="color">
  {{ color }}
</button>

<button uni-button>
  default
</button>

<button uni-button
        disabled>
  disabled
</button>

<h4>Icon Button</h4>

<button uni-icon-button
        *ngFor="let color of colors"
        [color]="color">
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-icon-button>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-icon-button
        disabled>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<h4>Fab</h4>

<button uni-fab
        *ngFor="let color of colors"
        [color]="color">
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-fab>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-fab
        disabled>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<h4>Mini Fab</h4>

<button uni-mini-fab
        *ngFor="let color of colors"
        [color]="color">
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-mini-fab>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<button uni-mini-fab
        disabled>
  <uni-icon icon="mdi-home"></uni-icon>
</button>

<h4>Link</h4>

<button uni-link-button
        *ngFor="let color of colors"
        [color]="color">
  {{ color }}
</button>

<button uni-link-button>
  default
</button>

<button uni-link-button
        disabled>
  disabled
</button>
`;
