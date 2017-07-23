# lte-tabset

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| direction | string | | 'left' | 设置 TabSet 选项的显示方向，可选 ['left', 'right'] |
| value | string, number | Y |  | 当前选中的选项卡 |

## Slots

| Name | Description |
| --- | --- |
| default | 设置TabSet内容 |
| tabset-tools | 设置tabset Header自定义内容 |


## Events

| Name | Paramters | Description |
| --- | --- | --- |
| tab-click | tabItem | 当点击Item Header时触发 |
| tab-remove | tabItem | 当移除Item时触发 |

# lte-tab-item

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| name | string | | | 设置tab-item的名字，不设置则为索引号，对应tabset的v-model |
| header | string | | '' | 设置单个选项卡的显示文字 |
| icon | string | | '' | 设置选项卡ICON |
| closable | boolean | | false | 是否允许关闭（显示移除按钮） |
| disabled | boolean | | false | 是否处于禁用状态（暂未实现） |

## Slots

| Name | Description |
| --- | --- |
| default | 设置Tab的主要内容 |


## Events

| Name | Paramters | Description |
| --- | --- | --- |
