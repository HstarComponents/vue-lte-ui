# lte-timeline

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |

## Slots

| Name | Description |
| --- | --- |
| default | 设置TimeLine内容 |


## Events

| Name | Paramters | Description |
| --- | --- | --- |

# lte-timeline-item

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| isLabel | boolean | | false | 设置Item类型是否是标签 |
| labelBgClass | string | | '' | 设置Label的背景色（当isLabel=true时有效） |
| icon | string | | '' | 设置ICON |
| iconBgClass | string | | '' | 设置ICON的背景色class |
| end | boolean | | false | 是否是结尾的Item（如果true，则没有item content） |

## Slots

| Name | Description |
| --- | --- |
| default | 设置TimeLine Item的主要内容 |


## Events

| Name | Paramters | Description |
| --- | --- | --- |
