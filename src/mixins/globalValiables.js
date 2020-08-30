export default {
    
  created: function() {
    function reqListener () {
      console.log(this.responseText);
      this.tkkk = JSON.parse(this.responseText);
    }
    this.aReq = new XMLHttpRequest();
    this.aReq.addEventListener("load", reqListener);
    this.aReq.open("GET", "http://weather.livedoor.com/weather_hacks/webservice");
    this.aReq.send();
  },
  data(){
    return{
      aReq: "",
      data:[{ "name": "山田2", "age": 21 },{ "name": "佐藤", "age": 22 },{ "name": "鈴木", "age": 32 }],
    }
  },
  methods: {
    test_func() {
      return "ABC";
    },
    test_func2() {
      return "abc1ABC2";
    },
  },
  mounted() {

  },
};
