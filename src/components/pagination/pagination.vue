<template>
  <ul class="lte-pagination pagination no-margin" :class="['pagination-' + size]">
    <li :class="{disabled: value <=1}" @click="setPageIndex(1, value <= 1)" v-if="!!firstText"><a href="javascript:;">{{firstText}}</a></li>
    <li :class="{disabled: value <=1}" @click="setPageIndex(value - 1)"><a href="javascript:;">{{prevText}}</a></li>
    <li v-for="p in pageItems" :class="{active: value === p.page}" @click="setPageIndex(p.page)"><a href="javascript:;">{{p.text}}</a></li>
    <li :class="{disabled: value >= pageCount}" @click="setPageIndex(value + 1)"><a href="javascript:;">{{nextText}}</a></li>
    <li :class="{disabled: value >= pageCount}" @click="setPageIndex(pageCount, value >= pageCount)" v-if="!!lastText"><a href="javascript:;">{{lastText}}</a></li>
  </ul>
</template>
<script>
  export default {
    name: 'lte-pagination',
    props: {
      size: { type: String, default: '' },
      firstText: { type: String, default: 'First' },
      lastText: { type: String, default: 'Last' },
      prevText: { type: String, default: 'Prev' },
      nextText: { type: String, default: 'Next' },
      maxItemCount: { type: Number, default: 5 },
      pageSize: { type: Number, default: 20 },
      // pageItems: { type: Array, default: () => [] },
      totalCount: { type: Number, default: 0 },
      value: { type: Number, default: 1 }
    },
    data() {
      return {
        pageItems: []
      }
    },
    created() {
      this._setPageItems();
    },
    computed: {
      pageCount() {
        return Math.max(1, Math.ceil(this.totalCount / this.pageSize));
      }
    },
    watch: {
      pageCount(newVal) {
        if (this.value > newVal) {
          this._setPageIndex(newVal);
        }
        this._setPageItems();
      },
      value() {
        this._setPageItems();
      }
    },
    methods: {
      _setPageItems() {
        let pages = [];
        let totalPageItemsCount = Math.ceil(this.pageCount / this.maxItemCount); // 总得pageItems个数
        let inPageIndex = Math.max(1, Math.ceil(this.value / this.maxItemCount)); // 页码必须大于等于1
        let startIdx = this.maxItemCount * (inPageIndex - 1); // 计算起点索引
        let endIndex = Math.min(startIdx + this.maxItemCount, this.pageCount);
        for (var i = startIdx + 1; i <= endIndex; i++) {
          pages.push({ page: i, text: String(i) });
        }
        if (inPageIndex < totalPageItemsCount) { // 不是最后一个pageItems
          pages.push({ text: '...', page: endIndex + 1 });
        }
        if (inPageIndex > 1) {// 不是第一页
          pages.unshift({ text: '...', page: startIdx - 1 });
        }
        this.pageItems = pages;
      },
      setPageIndex(p, disabled) {
        if (disabled) {
          return;
        }
        if (p > 0 && p <= this.pageCount) {
          this._setPageIndex(p);
        }
      },
      _setPageIndex(val) {
        this.$emit('input', val);
        this.$emit('page-changed', val);
      }
    }
  };

</script>
