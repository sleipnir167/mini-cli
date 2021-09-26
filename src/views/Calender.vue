<template>
  <div id="Calender" class="kokoko">
    <v-app id="inspire">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat color="white">
              <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                Today
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="85%">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
              locale="ja-jp"
              :day-format="timestamp => new Date(timestamp.date).getDate()"
              :month-format="timestamp => ' '"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat >
                <v-toolbar :color="selectedEvent.color" dark >
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                  <div>{{selectedEvent.name}}に関する詳細情報です。</div>
                  <div>○○をXXしてください</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                  >
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  data: () => ({
    focus: '',
    type: 'month',
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      // this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange () {
      const events = []

      // const min = new Date(`${start.date}T00:00:00`)
      // const max = new Date(`${end.date}T23:59:59`)
      // const days = (max.getTime() - min.getTime()) / 86400000
      // const eventCount = this.rnd(days, days + 20)

      // for (let i = 0; i < eventCount; i++) {
      //   // const allDay = this.rnd(0, 3) === 0
      //   const firstTimestamp = this.rnd(min.getTime(), max.getTime())
      //   const first = new Date(firstTimestamp - (firstTimestamp % 900000))
      //   // const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
      //   // const second = new Date(first.getTime() + secondTimestamp)

      //   const first2 = new Date('2020-10-02')
      //   console.log("first:" + first)
      //   console.log("first2:" + first2)
      // }


      let first = new Date('2021-09-02')
      let end = new Date('2021-09-07')

      first = new Date('2021-09-01')
      end = new Date('2021-09-01')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-09-08')
      end = new Date('2021-09-08')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-09-15')
      end = new Date('2021-09-15')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-09-22')
      end = new Date('2021-09-22')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-09-29')
      end = new Date('2021-09-29')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-09-02')
      end = new Date('2021-09-05')
      events.push({name: "車体保全(H201)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-09-06')
      end = new Date('2021-09-06')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-09-07')
      end = new Date('2021-09-10')
      events.push({name: "車体保全(H202)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-09-13')
      end = new Date('2021-09-16')
      events.push({name: "車体保全(H203)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-09-17')
      end = new Date('2021-09-17')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-09-20')
      end = new Date('2021-09-23')
      events.push({name: "車体保全(H204)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-09-21')
      end = new Date('2021-09-21')
      events.push({name: "一斉点検", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-09-24')
      end = new Date('2021-09-24')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-09-26')
      end = new Date('2021-09-26')
      events.push({name: "指定保全(A14)", start: first, end: end, color: "grey", timed: false,})

      first = new Date('2021-09-26')
      end = new Date('2021-09-26')
      events.push({name: "指定保全(A25)", start: first, end: end, color: "grey", timed: false,})

      first = new Date('2021-09-27')
      end = new Date('2021-09-27')
      events.push({name: "指定保全(A15)", start: first, end: end, color: "grey", timed: false,})

      first = new Date('2021-09-27')
      end = new Date('2021-09-27')
      events.push({name: "指定保全(A27)", start: first, end: end, color: "grey", timed: false,})

      first = new Date('2021-09-28')
      end = new Date('2021-09-28')
      events.push({name: "指定保全(A14)", start: first, end: end, color: "grey", timed: false,})

      first = new Date('2021-09-30')
      end = new Date('2021-09-30')
      events.push({name: "検査実績報告期限", start: first, end: end, color: "red", timed: false,})

      first = new Date('2021-09-29')
      end = new Date('2021-09-29')
      events.push({name: "検査調整会議", start: first, end: end, color: this.colors[this.rnd(0, this.colors.length - 1)], timed: false,})

      first = new Date('2021-09-08')
      end = new Date('2021-09-13')
      events.push({
        name: "車体保全",
        start: first,
        end: end,
        color: this.colors[this.rnd(0, this.colors.length - 1)],
        timed: false,
      })

      first = new Date('2021-09-23')
      end = new Date('2021-09-23')
      events.push({
        name: "月保全",
        start: first,
        end: end,
        color: this.colors[this.rnd(0, this.colors.length - 1)],
        timed: false,
      })








      first = new Date('2021-10-06')
      end = new Date('2021-10-06')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-10-13')
      end = new Date('2021-10-13')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-10-20')
      end = new Date('2021-10-20')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-10-27')
      end = new Date('2021-10-27')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: false,})



      first = new Date('2021-10-02')
      end = new Date('2021-10-05')
      events.push({name: "車体保全(H101)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-10-06')
      end = new Date('2021-10-06')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-10-07')
      end = new Date('2021-10-10')
      events.push({name: "車体保全(H102)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-10-12')
      end = new Date('2021-10-12')
      events.push({name: "全体調整会議", start: first, end: end, color: "brown", timed: false,})

      first = new Date('2021-10-13')
      end = new Date('2021-10-16')
      events.push({name: "車体保全(H103)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-10-17')
      end = new Date('2021-10-17')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-10-20')
      end = new Date('2021-10-23')
      events.push({name: "車体保全(H104)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-10-21')
      end = new Date('2021-10-21')
      events.push({name: "一斉点検", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-10-24')
      end = new Date('2021-10-24')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-10-26')
      end = new Date('2021-10-26')
      events.push({name: "装置保全(A10)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-10-26')
      end = new Date('2021-10-26')
      events.push({name: "装置保全(A21)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-10-27')
      end = new Date('2021-10-27')
      events.push({name: "装置保全(A11)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-10-27')
      end = new Date('2021-10-27')
      events.push({name: "装置保全(A22)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-10-28')
      end = new Date('2021-10-28')
      events.push({name: "装置保全(A12)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-10-30')
      end = new Date('2021-10-30')
      events.push({name: "検査実績報告期限", start: first, end: end, color: "red", timed: false,})

      first = new Date('2021-10-29')
      end = new Date('2021-10-29')
      events.push({name: "検査調整会議", start: first, end: end, color: this.colors[this.rnd(0, this.colors.length - 1)], timed: false,})






      first = new Date('2021-11-06')
      end = new Date('2021-11-06')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-11-13')
      end = new Date('2021-11-13')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-11-20')
      end = new Date('2021-11-20')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: true,})

      first = new Date('2021-11-27')
      end = new Date('2021-11-27')
      events.push({name: "朝礼", start: first, end: end, color: "blue", timed: false,})



      first = new Date('2021-11-02')
      end = new Date('2021-11-05')
      events.push({name: "車体保全(H101)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-11-06')
      end = new Date('2021-11-06')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-11-07')
      end = new Date('2021-11-10')
      events.push({name: "車体保全(H102)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-11-13')
      end = new Date('2021-11-16')
      events.push({name: "車体保全(H103)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-11-17')
      end = new Date('2021-11-17')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-11-20')
      end = new Date('2021-11-23')
      events.push({name: "車体保全(H104)", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-11-21')
      end = new Date('2021-11-21')
      events.push({name: "一斉点検", start: first, end: end, color: "green", timed: false,})

      first = new Date('2021-11-24')
      end = new Date('2021-11-24')
      events.push({name: "予備日", start: first, end: end, color: "purple", timed: false,})

      first = new Date('2021-11-26')
      end = new Date('2021-11-26')
      events.push({name: "装置保全(A10)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-11-26')
      end = new Date('2021-11-26')
      events.push({name: "装置保全(A21)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-11-27')
      end = new Date('2021-11-27')
      events.push({name: "装置保全(A11)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-11-27')
      end = new Date('2021-11-27')
      events.push({name: "装置保全(A22)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-11-28')
      end = new Date('2021-11-28')
      events.push({name: "装置保全(A12)", start: first, end: end, color: "orange", timed: false,})

      first = new Date('2021-11-30')
      end = new Date('2021-11-30')
      events.push({name: "検査実績報告期限", start: first, end: end, color: "red", timed: false,})

      first = new Date('2021-11-29')
      end = new Date('2021-11-29')
      events.push({name: "検査調整会議", start: first, end: end, color: this.colors[this.rnd(0, this.colors.length - 1)], timed: false,})




      this.events = events
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<style lang="scss" scoped>

</style>