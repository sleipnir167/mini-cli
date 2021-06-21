<template>
  <v-app id="inspire">
    <v-container fluid>
      <template>
        <v-row>
          <v-col cols="8">
            <v-data-table
              dense
              :headers="headers"
              :items="desserts"
              item-key="name"
              class="elevation-1"
            ></v-data-table>
          </v-col>

          <v-col cols="4">
            <template>
              <v-card
                class="mx-auto"
                max-width="400"
              >
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      設定値
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>


                <v-list-item>
                  <v-list-item-subtitle>一日の走行キロ</v-list-item-subtitle>
                  <v-list-item-subtitle>23.5km</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                  <v-list-item-subtitle>基準日</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ ViewBaseDay }}</v-list-item-subtitle>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-subtitle>日付</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ targetDay }}</v-list-item-subtitle>
                </v-list-item>

                <v-slider
                  v-model="slider"
                  :thumb-size="24"
                  thumb-label="always"
                  class="mx-4 mt-10"
                ></v-slider>

                <v-list class="transparent">
                  <v-list-item
                    v-for="item in forecast"
                    :key="item.day"
                  >
                    <v-list-item-title>{{ item.day }}</v-list-item-title>

                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-subtitle class="text-right">
                      {{ item.temp }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>

              </v-card>
            </template>

          </v-col>
        </v-row>
      </template>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    
    return {
      desserts: [
        {
          name: '車両A',
          車体保全: 159,
          装置保全: 6.0,
          指定保全: 24,
          年保全: 4.0,
          月保全: 111,
          iron: '1%',
        },
        {
          name: '車両B',
          車体保全: 237,
          装置保全: 9.0,
          指定保全: 37,
          年保全: 4.3,
          月保全: 111,
          iron: '1%',
        },
        {
          name: '車両C',
          車体保全: 262,
          装置保全: 16.0,
          指定保全: 23,
          年保全: 6.0,
          月保全: 111,
          iron: '7%',
        },
        {
          name: '車両D',
          車体保全: 305,
          装置保全: 3.7,
          指定保全: 67,
          年保全: 4.3,
          月保全: 111,
          iron: '8%',
        },
        {
          name: '車両E',
          車体保全: 356,
          装置保全: 16.0,
          指定保全: 49,
          年保全: 3.9,
          月保全: 111,
          iron: '16%',
        },
        {
          name: '車両F',
          車体保全: 375,
          装置保全: 0.0,
          指定保全: 94,
          年保全: 0.0,
          月保全: 111,
          iron: '0%',
        },
        {
          name: '車両G',
          車体保全: 392,
          装置保全: 0.2,
          指定保全: 98,
          年保全: 0,
          月保全: 111,
          iron: '2%',
        },
        {
          name: '車両H',
          車体保全: 408,
          装置保全: 3.2,
          指定保全: 87,
          年保全: 6.5,
          月保全: 111,
          iron: '45%',
        },
        {
          name: '車両I',
          車体保全: 452,
          装置保全: 25.0,
          指定保全: 51,
          年保全: 4.9,
          月保全: 111,
          iron: '22%',
        },
        {
          name: '車両J',
          車体保全: 518,
          装置保全: 26.0,
          指定保全: 65,
          年保全: 7,
          月保全: 111,
          iron: '6%',
        },
      ],
      headers: [
        {
          text: '車両',
          align: 'start',
          value: 'name',
        },
        { text: '車体保全', value: '車体保全' },
        { text: '装置保全', value: '装置保全' },
        { text: '指定保全', value: '指定保全' },
        { text: '年保全', value: '年保全' },
        { text: '月保全', value: '月保全' },
        { text: '限度 (%)', value: 'iron' },
      ],
      slider: 0,
      BaseDay: new Date(),
    };
  },
  methods:{
    setList(val) {
      this.desserts.forEach(function(element){
        element.車体保全 = element.車体保全 + val
        element.装置保全 = element.装置保全 + val
        element.指定保全 = element.指定保全 + val
        element.年保全 = element.年保全 + val
        element.月保全 = element.月保全 + val
        element.iron = Math.floor((parseFloat(element.iron) + (val * 0.1) + (Math.random() * 0.1) ) *100) / 100 + '%'
      });
    },
  },
  computed: {
    ViewBaseDay() {
      return this.BaseDay.toISOString().substr(0, 10)
    },
    targetDay() {
      var dt = new Date();
      dt.setDate(this.BaseDay.getDate() + this.slider);
      this.setList(this.slider)
      return dt.toISOString().substr(0, 10);
    },
  },
};
  
</script>

<style lang="scss" scoped>
.demo_item {
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-image: url(/Picture/icon/tansya.png);
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  display: block;
  position: relative;
}
.demo_item.anime {
  animation-name: upDown;
  animation-iteration-count: infinite;
  animation-duration: 0.15s;
  animation-direction: alternate;
  animation-timing-function: steps(2);
  transition-duration: 0.3s;
  transition-property: transform;
}

.demo_stage {
  position: relative;
  width: 100%;
  height: 65px;
  top: 0px;
  display: block;
  border-bottom: solid #777 1px;
}

.demo_wrap {
  display: block;
  position: absolute;
  top: 20px;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 120s;
  animation-iteration-count: 1;
  margin-right: -25px;
}

.demo_wrap[data-order="left"] {
  animation-name: GoLeft;
}
.demo_wrap[data-order="right"] {
  animation-name: GoRight;
}

[data-order="right"] > .demo_item {
  transform: rotateY(180deg);
}

@keyframes GoLeft {
  0% {
    right: 10%;
  }
  100% {
    right: 90%;
  }
}
@keyframes GoRight {
  0% {
    right: 90%;
  }
  100% {
    right: 10%;
  }
}

@keyframes upDown {
  0% {
    top: 0;
  }
  100% {
    top: 3px;
  }
}
</style>
