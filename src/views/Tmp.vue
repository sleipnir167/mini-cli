<template>
  <v-app id="inspire">
    <v-container fluid div class="ma-1">

      <!-- カレンダー -->
      <table border="0.1" width="500" cellspacing="0" cellpadding="5" bordercolor="#333333">

        <tr>
          <th style="border:solid 1px black;min-width:100px;"></th>
          <th class="ViewDayInfo2" cols="1" v-for="viewday in viewdays" :key="viewday" style="border:solid 1px black;min-width:50px;">
              <v-card class="firstBox">
                <p>{{ viewday.day.substring(5,10) }}</p>
              </v-card>
              <v-card class="secondBox">
                <p>{{ viewday.youbi }}</p>
              </v-card>
          </th>
        </tr>
      </table>

      <table border="0.1" width="500" cellspacing="0" cellpadding="5" bordercolor="#333333" v-for="Hensei in Henseis" :key="Hensei" >
        <tr class="day" >
          <td style="border:solid 1px black;min-width:100px;" @click="Hensei.expand = !Hensei.expand">
              {{Hensei.Name}}
                <v-icon v-if="Hensei.expand">mdi-chevron-up</v-icon>
                <v-icon v-else>mdi-chevron-down</v-icon>
          </td>
          <td class="ViewDayInfo" cols="1" v-for="dayinfo in dayinfos" :key="dayinfo" style="border:solid 1px black;min-width:50px;">
            <v-card @click.stop="divclick(dayinfo)" >
              <div class="firstBox">
                <p>{{ dayinfo.kensa }}</p>
              </div>
              <div class="secondBox">
                <p>{{ dayinfo.kiro }}</p>
              </div>
            </v-card>
          </td>
        </tr>

        <template v-if="Hensei.expand">
          <tr class="day" v-for="syagou in Hensei.syagous" :key="syagou">
            <td style="height:41.5px; border:solid 1px black">
              {{syagou}}
            </td>
            <td class="ViewDayInfo" cols="1" v-for="dayinfo in dayinfos" :key="dayinfo">
              <v-card @click.stop="divclick(dayinfo)" >
                <div class="firstBox">
                  <p>{{ dayinfo.kensa }}</p>
                </div>
                <div class="secondBox">
                  <p>{{ dayinfo.kiro }}</p>
                </div>
              </v-card>
            </td>
          </tr>
        </template>
      
      </table>

      <!-- 実績入力画面 -->
      <v-dialog v-model="dialog" max-width="290" >
        <v-card>
          <v-card-title class="headline">実績入力</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
                <label>日付</label>
                <v-text-field ref="selectday" v-model="selectday" placeholder=" " dense disabled></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
                <label>検査</label>
                <v-text-field ref="selectkens" v-model="selectkens" placeholder=" " outlined dense></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="12"  class="py-0">
                <label>キロ</label>
                <v-text-field ref="selectkiro" v-model="selectkiro" placeholder=" " outlined dense></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" text @click="dialog = false">更新</v-btn>
            <v-btn color="primary darken-1" text @click="dialog = false">取消</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      selectkens:null,
      selectkiro:null,
      Henseis:[
        {Name:"H101", expand: false, syagous:["TCXXX-1001","TCXXX-1002","M XXX-1003","M'XXX-1004","TCXXX-1005","TCXXX-1006","TCXXX-1007","TCXXX-1008","TCXXX-1009","TCXXX-1010",]},
        {Name:"H102", expand: false, syagous:["TCXXX-2001","TCXXX-2002","M XXX-2003","M'XXX-2004","TCXXX-2005","TCXXX-2006","TCXXX-2007","TCXXX-2008","TCXXX-2009","TCXXX-2010",]},
        {Name:"H103", expand: false, syagous:["TCXXX-3001","TCXXX-3002","M XXX-3003","M'XXX-3004","TCXXX-3005","TCXXX-3006","TCXXX-3007","TCXXX-3008","TCXXX-3009","TCXXX-3010",]},
        {Name:"H104", expand: false, syagous:["TCXXX-4001","TCXXX-4002","M XXX-4003","M'XXX-4004","TCXXX-4005","TCXXX-4006","TCXXX-4007","TCXXX-4008","TCXXX-4009","TCXXX-4010",]},
        {Name:"H105", expand: false, syagous:["TCXXX-5001","TCXXX-5002","M XXX-5003","M'XXX-5004","TCXXX-5005","TCXXX-5006","TCXXX-5007","TCXXX-5008","TCXXX-5009","TCXXX-5010",]},
        {Name:"H106", expand: false, syagous:["TCXXX-6001","TCXXX-6002","M XXX-6003","M'XXX-6004","TCXXX-6005","TCXXX-6006","TCXXX-6007","TCXXX-6008","TCXXX-6009","TCXXX-6010",]},
        {Name:"H107", expand: false, syagous:["TCXXX-7001","TCXXX-7002","M XXX-7003","M'XXX-7004","TCXXX-7005","TCXXX-7006","TCXXX-7007","TCXXX-7008","TCXXX-7009","TCXXX-7010",]},
        {Name:"H108", expand: false, syagous:["TCXXX-8001","TCXXX-8002","M XXX-8003","M'XXX-8004","TCXXX-8005","TCXXX-8006","TCXXX-8007","TCXXX-8008","TCXXX-8009","TCXXX-8010",]},
        {Name:"H109", expand: false, syagous:["TCXXX-9001","TCXXX-9002","M XXX-9003","M'XXX-9004","TCXXX-9005","TCXXX-9006","TCXXX-9007","TCXXX-9008","TCXXX-9009","TCXXX-9010",]},
      ],
      viewdays:[
        {day: "2020/01/01",youbi:"月"},
        {day: "2020/01/02",youbi:"火"},
        {day: "2020/01/03",youbi:"水"},
        {day: "2020/01/04",youbi:"木"},
        {day: "2020/01/05",youbi:"金"},
        {day: "2020/01/06",youbi:"土"},
        {day: "2020/01/07",youbi:"日"},
        {day: "2020/01/08",youbi:"月"},
        {day: "2020/01/09",youbi:"火"},
        {day: "2020/01/10",youbi:"水"},
        {day: "2020/01/11",youbi:"木"},
        {day: "2020/01/12",youbi:"金"},
        {day: "2020/01/13",youbi:"土"},
        {day: "2020/01/14",youbi:"日"},
        {day: "2020/01/15",youbi:"月"},
        {day: "2020/01/16",youbi:"火"},
        {day: "2020/01/17",youbi:"水"},
        {day: "2020/01/18",youbi:"木"},
        {day: "2020/01/19",youbi:"金"},
        {day: "2020/01/20",youbi:"土"},
        {day: "2020/01/21",youbi:"日"},
        {day: "2020/01/22",youbi:"月"},
      ],
      dayinfos:[
        {kensa: "　", kiro: "100.0km", day: "2020/01/01"},
        {kensa: "　", kiro: "111.0km", day: "2020/01/02"},
        {kensa: "車", kiro: "122.0km", day: "2020/01/03"},
        {kensa: "　", kiro: "133.0km", day: "2020/01/04"},
        {kensa: "　", kiro: "144.0km", day: "2020/01/05"},
        {kensa: "　", kiro: "155.0km", day: "2020/01/06"},
        {kensa: "　", kiro: "166.0km", day: "2020/01/07"},
        {kensa: "　", kiro: "166.0km", day: "2020/01/08"},
        {kensa: "　", kiro: "176.0km", day: "2020/01/09"},
        {kensa: "　", kiro: "116.0km", day: "2020/01/10"},
        {kensa: "　", kiro: "133.0km", day: "2020/01/11"},
        {kensa: "　", kiro: "144.0km", day: "2020/01/12"},
        {kensa: "　", kiro: "155.0km", day: "2020/01/13"},
        {kensa: "月", kiro: "166.0km", day: "2020/01/14"},
        {kensa: "　", kiro: "166.0km", day: "2020/01/15"},
        {kensa: "　", kiro: "176.0km", day: "2020/01/16"},
        {kensa: "　", kiro: "116.0km", day: "2020/01/17"},
        {kensa: "　", kiro: "166.0km", day: "2020/01/18"},
        {kensa: "　", kiro: "176.0km", day: "2020/01/19"},
        {kensa: "　", kiro: "116.0km", day: "2020/01/20"},
        {kensa: "　", kiro: "133.0km", day: "2020/01/21"},
        {kensa: "　", kiro: "144.0km", day: "2020/01/22"},
      ]
    }),
    methods: {
      divclick(dayinfo){
        this.dialog = true,
        this.selectkens = dayinfo.kensa
        this.selectkiro = dayinfo.kiro
        this.selectday = dayinfo.day
      }
    },
  }
</script>

<style lang="scss" scoped>

.ViewDayInfo {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hidden;

  > :hover {
    color: red;
    border: solid 0.1px red;
  }
}

.ViewDayInfo .firstBox {
  height: 20px;
  width: 100%;
  text-align: center;
}

.ViewDayInfo .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
  text-align: center;
}

.ViewDayInfo2 {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hidden;
}

.ViewDayInfo2 .firstBox {
  height: 20px;
  width: 100%;
  text-align: center;
}

.ViewDayInfo2 .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
  text-align: center;
}

</style>