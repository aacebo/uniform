# UniBadge

`import { UniBadgeModule } from '@uniform/components';`

## UniBadgePosition

`'bottom left' | 'bottom right' | 'top left' | 'top right'`

## UniBadgeDirective

| Property                                                 | Description                        |
|----------------------------------------------------------|------------------------------------|
| `@Input('uniBadge') content: string`                     | Badge content                      |
| `@Input('uniBadgeColor') color?: UniColor`               | Theme color                        |
| `@Input('uniBadgeSize') size?: UniSize`                  | Base size                          |
| `@Input('uniBadgePosition') position?: UniBadgePosition` | Badge position                     |
| `@Input('uniBadgeDisabled') disabled?: boolean`          | Whether the component is disabled  |

## UniBadgeComponent

| Property                    | Description                        |
|-----------------------------|------------------------------------|
| `@Input() content: string`  | Badge content                      |
| `@Input() color?: UniColor` | Theme color                        |
| `@Input() size?: UniSize`   | Base size                          |
