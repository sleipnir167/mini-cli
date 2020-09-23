<template>
  <v-card>
    <v-card-text :inset="inset">管理担当</v-card-text>
    <v-list>
      <template v-for="(item, index) in items">
        <v-list-item v-if="item.title" :key="item.title">
          <v-list-item-action>
            <v-img width="30" :src="item.pic"></v-img>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action v-if="item.mail">
            <v-btn outlined small fab color="indigo">
              <v-icon>mdi-email-outline</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider v-else-if="item.divider" :key="index" ></v-divider>
      </template>
        
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      inset: false,
      items: [
        {
          pic: '/Picture/icon/building.svg',
          title: 'A箇所',
          mail: 'XX',
        },
        {
          divider: true,
        },
        {
          pic: '/Picture/icon/building.svg',
          title: 'B箇所',
          mail: 'XX',
        },
        {
          divider: true,
        },
        {
          pic: '/Picture/icon/sagyou.svg',
          title: '山田　太郎',
          mail: 'XX',
        },
        {
          pic: '/Picture/icon/sagyou.svg',
          title: '野比　のび太',
          mail: 'XX',
        },
      ],
    }),
  }
</script>
