# lte-box(Panel)

盒子/面板组件（Panel组件）

# Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| header | string | | '' | 设置box的title属性（为了避免和html的title属性冲突，使用header属性） |
| icon | string | | | 设置标题的ICON图标，自定义了 `box-title slot`，该属性会无效 |
| collapsed | boolean | | false | 设置box是否是collapsed（收缩） |
| showHeaderBorder | boolean | | true | 是否显示Header Border |
| type | string | | 'default' | 设置Box的类型，影响box的顶部边框颜色，可选：['success', 'warning', 'danger', 'info', 'primary', 'default', 'solid'] |

# Slots

| Name | Description |
| --- | --- |
| default | 设置Box的内容（default slot不需要指定slot name） |
| box-title | 更灵活的自定义Box的Title内容，允许标签 |
| box-tools | 设置Box组件，右上角的工具栏位 |
| box-footer | 设置Box组件的Footer |

# Events

| Name | Paramters | Description |
| --- | --- | --- |
