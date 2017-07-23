# lte-modal

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | '' | 设置弹出框类型（控制颜色），可选 ['', 'info', 'danger', 'warning', 'success'] |
| header | string | | | 设置弹出框Header（如果设置slot modal-header，该选项会失效） |
| okText | string | | 'Save Changes' | 确定按钮文字 |
| cancelText | string | | 'Cancel' | 取消按钮文字 |
| closable | boolean | | true | 是否显示右上角关闭按钮（x） |
| value | boolean | Y | false | 控制弹出层是否显示 |
| size | string | | '' | 设置弹出层大小，可选 ['', 'lg', 'sm'] |
| width | string, number | | | 设置弹出层宽度，设置该选项时，size会失效 |

## Slots

| Name | Description |
| --- | --- |
| default | 设置弹出框主体内容 |
| modal-header | 设置弹出框header内容 |
| modal-footer | 自定义弹出框footer（底部操作按钮） |


## Events

| Name | Paramters | Description |
| --- | --- | --- |
| cancel | MouseEvent | 点击取消后触发（会关闭弹窗） |
| ok | MouseEvent | 点击OK后触发 |
