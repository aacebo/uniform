export const INPUT_EXAMPLE = `
<uni-form-field>
  <uni-label>test label</uni-label>

  <input
    uniInput
    placeholder="test placeholder"
    spellcheck="false"
    required
    [(ngModel)]="value"
  />

  <uni-hint>max 5 characters</uni-hint>
  <uni-error *ngIf="value?.length > 5">too many characters!</uni-error>
</uni-form-field>
`;
