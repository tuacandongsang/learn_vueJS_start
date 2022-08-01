var vueinstall = new Vue({
  el: "#app",
  data: {
    title: "ao thun nam hang viet nam xuat khau tuan",
    url: "https://dbk.vn/uploads/ckfinder/images/1-content/hoa-dep-1.jpg",
    target: "_blank",
    price: 30000,
    sale: 0.3,
    selected: 1,
    cartNumber:1,
    listProduct: [
      {
        url: "http://media.graphcms.com/9jyVjfyATMXQF0eudfZg",
        quanty: 5,
        textColor: "mau do",
      },
      {
        url: "https://dbk.vn/uploads/ckfinder/images/1-content/hoa-dep-1.jpg",
        quanty: 2,
        textColor: "mau hong",
      },
      {
        url: "https://baoquocte.vn/stores/news_dataimages/nguyennga/042020/14/08/in_article/2217_2_RTNU.jpg",
        quanty: 1,
        textColor: "nhieu mau",
      },
    ],
    listInfor:[
      'chat lieu thoang gio',
      'rat la oke',
      'gia dang sale',
      'freeship ngay hom nay'
    ]
  },
  methods: {
    handleClick(e, index){
      return this.selected = index
    },
    active(index){
      return {
        active : this.selected == index
      }
    },
    handleAdd(){
      return this.cartNumber = this.cartNumber + 1
    }
  },
  computed: {
    formatPrice() {
      var number = this.price;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    finalyPrice(){
      var number = this.price - this.sale * this.price
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    getProduct(){
      let index = this.selected
      return this.listProduct[index]
    }
  },
});
