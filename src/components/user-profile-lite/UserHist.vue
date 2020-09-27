<template>
  <v-card
    :loading="loading"
    class="mx-auto my-5"
  >
    <v-card-text :inset="inset">車歴</v-card-text>
      <div>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
        <template v-slot:[`item.calories`]="{ item }">
          <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
        </template>
        </v-data-table>

        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </div>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
          {
            text: '名称',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '状況', value: 'calories' },
          { text: '鉄道会社', value: 'fat' },
          { text: '形式', value: 'carbs' },
          { text: '車両基地（所属）', value: 'protein' },
          { text: '期間', value: 'iron' },
        ],
        desserts: [
          {
            name: 'サハE235-4613',
            calories: '運用中',
            fat: 'JR東日本',
            carbs: 'E235系 ( サハE235形 )'	,
            protein: '東トウ',
            iron: '2017/08 〜',
          },
          {
            name: 'サハE231-4613',
            calories: '形式変更',
            fat: 'JR東日本',
            carbs: 'E231系 ( サハE231形 )'	,
            protein: '東トウ',
            iron: '2011/03 〜 2017/08',
          },
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories === '運用中') return '#852a30'
        else if (calories === '形式変更') return '#83b57d'
        else return 'green'
      },
    },
  }
</script>
