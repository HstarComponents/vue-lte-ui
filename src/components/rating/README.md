# lte-rating

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| max | number | | 5 | 显示星的最大数量 |
| allowHalf | boolean | | false | 是否允许选中半个，暂未实现 |
| readonly | boolean | | false | 是否是只读模式 |
| value | number | Y | | 双向绑定value |

## Slots

| Name | Description |
| --- | --- |

## Events

| Name | Paramters | Description |
| --- | --- | --- |
| change | value | 评分改变时触发，返回当前评分 |
