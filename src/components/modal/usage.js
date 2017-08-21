new Vue({
  el: document.querySelector('.demo-page'),
  data: {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false
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
    showModal(key) {
      this[key] = true;
    }
  }
});
