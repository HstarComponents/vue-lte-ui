# lte-progress

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | 'info' | 设置进度条类型（控制颜色）|
| striped | boolean | | false | 是否显示条纹 |
| vertical | boolean | | false | 是否纵向显示 |
| size | string | | '' | 设置进度条尺寸，可选 ['', 'sm', 'xs', 'xss'] |
| active | boolean | false | 是否显示为激活状态 |
| max | number | | 100 | 进度条的最大刻度 |
| value | number | Y | | 进度条的值（最终显示的比例为 value / max） |
| text | string | | '' | 进度条显示的文本（在小号进度条上，文字会溢出） |

## Slots

| Name | Description |
| --- | --- |

## Events

| Name | Paramters | Description |
| --- | --- | --- |
