# UniProgress

`import { UniProgressModule } from '@uniform/components';`

## UniProgressMode

`'determinate' | 'indeterminate'`

## UniProgressBarComponent

| Property                          | Description    |
|-----------------------------------|----------------|
| `@Input() mode?: UniProgressMode` | Progress mode  |
| `@Input() color?: UniColor`       | Theme color    |
| `@Input() total?: number`         | Progress total |
| `@Input() value?: number`         | Progress value |

## UniProgressSpinnerComponent

| Property                          | Description         |
|-----------------------------------|---------------------|
| `@Input() mode?: UniProgressMode` | Progress mode       |
| `@Input() color?: UniColor`       | Theme color         |
| `@Input() total?: number`         | Progress total      |
| `@Input() value?: number`         | Progress value      |
| `@Input() strokeWidth?: number`   | Circle stroke width |
| `@Input() diameter?: number`      | Circle diameter     |
