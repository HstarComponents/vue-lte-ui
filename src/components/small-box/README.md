# lte-small-box

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| icon | string | | | 设置 `small-box` 的图标 |
| boxBg | string | | | 通过具体颜色设置small-box背景色（如果同时设置boxBg和boxBgClass，会覆盖boxBgClass） |
| boxBgClass | string | | | 通过class设置small-box背景颜色（如果同时设置boxBg和boxBgClass，会被boxBg覆盖） |

## Slots

| Name | Description |
| --- | --- |
| default | 设置small-box内容 |
| box-footer | 设置small-box的footer内容 |


## Events

| Name | Paramters | Description |
| --- | --- | --- |
| footer-click | MouseEvent | 当组件的Footer部分被点击时触发 |
