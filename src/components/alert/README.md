# lte-alert

# Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | 'info' | 设置alert类型，可选['info', 'warning', 'danger', 'success'] |
| calloutStyle | boolean | | false | 设置是否使用callout风格（会有一个特别的左边线） |
| closable | boolean | | false | 是否可关闭（显示关闭按钮） |

# Slots

| Name | Description |
| --- | --- |
| default | 设置Alert的主内容 |



# Events

| Name | Paramters | Description |
| --- | --- | --- |
| close | boolean | Alert组件关闭后触发（点击关闭按钮会引起组件关闭） |

