<template>

    <v-container fluid div class="ma-1">

      <!-- カレンダー -->
      <table border="0.1" width="500" cellspacing="0" cellpadding="5" bordercolor="#333333">

        <tr>
          <th style="border:solid 1px black;min-width:100px;"></th>
          <th id="ViewDayInfo2" cols="1" v-for="viewday in viewdays" :key="viewday" style="border:solid 1px black;min-width:50px;">
              <v-card class="firstBox">
                <p>{{ viewday.day.substring(5,10) }}</p>
              </v-card>
              <v-card class="secondBox">
                <p>{{ viewday.youbi }}</p>
              </v-card>
          </th>
        </tr>

        <tr>
          <td style="border:solid 1px black" @click="expand = !expand">
              {{Hensmei}}
          </td>
          <td id="ViewDayInfo" cols="1" v-for="dayinfo in dayinfos" :key="dayinfo">
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

        <tr v-show="expand" v-for="syagou in syagous" :key="syagou">
          <td style="height:41.5px; border:solid 1px black">
            {{syagou}}
          </td>
          <td id="ViewDayInfo" cols="1" v-for="dayinfo in dayinfos" :key="dayinfo">
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
      
      </table>

    </v-container>
    
</template>

<script>
  export default {
    data: () => ({
      expand: false,
      expand2: false,
      dialog: false,
      selectkens:null,
      selectkiro:null,
      Hensmei:"H101",
      syagous:["TCXXX-0001","TCXXX-0002","M XXX-0003","M'XXX-0004","TCXXX-0005","TCXXX-0006","TCXXX-0007","TCXXX-0008","TCXXX-0009","TCXXX-0010",],
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
      ],
      dayinfos:[
        {kensa: "　", kiro: "100.0km", day: "2020/01/01"},
        {kensa: "　", kiro: "111.0km", day: "2020/01/02"},
        {kensa: "車", kiro: "122.0km", day: "2020/01/03"},
        {kensa: "　", kiro: "133.0km", day: "2020/01/04"},
        {kensa: "　", kiro: "144.0km", day: "2020/01/05"},
        {kensa: "　", kiro: "155.0km", day: "2020/01/06"},
        {kensa: "月", kiro: "166.0km", day: "2020/01/07"},
        {kensa: "　", kiro: "166.0km", day: "2020/01/08"},
        {kensa: "　", kiro: "176.0km", day: "2020/01/09"},
        {kensa: "　", kiro: "116.0km", day: "2020/01/10"},
      ]
    }),
  }
</script>

<style lang="scss" scoped>

#ViewDayInfo {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hidden;
}

#ViewDayInfo .firstBox {
  height: 20px;
  width: 100%;
  text-align: center;
}

#ViewDayInfo .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
  text-align: center;
}

#ViewDayInfo:hover {
  color: #3eb623;
  border: solid 1px #3eb623;
}

#ViewDayInfo2 {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hidden;
}

#ViewDayInfo2 .firstBox {
  height: 20px;
  width: 100%;
  text-align: center;
}

#ViewDayInfo2 .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
  text-align: center;
}

</style>