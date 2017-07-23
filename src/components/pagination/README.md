# lte-progress

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| size | string | | '' | 分页组件的尺寸，可选 ['', 'sm', 'lg'] |
| firstText | string | | 'First' | 首页文字，设为空，将不会显示 |
| lastText | string | | 'Last' | 最后一页文字，设为空，将不会显示 |
| prevText | string | | 'Prev' | 上一页文字，设为空，将不会显示 |
| nextText | string | | 'Next' | 下一页文字，设为空，将不会显示 |
| maxItemCount | number | | 5 | 每页每次最大显示的页码个数 |
| pageSize | number | | 20 | 每页显示的记录数 |
| totalCount | number | | 0 | 总记录数 |
| value | number | Y | 1 | 当前页码，通过v-model绑定 |

## Slots

| Name | Description |
| --- | --- |

## Events

| Name | Paramters | Description |
| --- | --- | --- |
| page-changed | pageIndex | 返回当前选中的页码 |
