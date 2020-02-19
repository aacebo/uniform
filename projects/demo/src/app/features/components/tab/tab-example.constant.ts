export const TAB_EXAMPLE = `
<uni-tab-group [(active)]="active">
  <uni-tab label="First">
    <ng-template uniTabBody>
      {{ active }}
    </ng-template>
  </uni-tab>

  <uni-tab label="Second">
    <ng-template uniTabBody>
      {{ active }}
    </ng-template>
  </uni-tab>
</uni-tab-group>
`;
