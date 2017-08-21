new Vue({
  el: document.querySelector('.demo-page'),
  data:{
    selectedTab: 't1'
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  watch: {

  },
  methods: {
    tabRemove(tab) {
      alert('remove' + tab.name);
    }
  }
});
