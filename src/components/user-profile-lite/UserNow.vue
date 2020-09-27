<template>
  <v-card
    :loading="loading"
    class="mx-auto my-5"
  >
    <v-card-text :inset="inset">管理担当</v-card-text>
    <v-list>

      <v-list-item >
        <v-list-item-content>
          <v-list-item-title>車両名称</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>クハE234-1</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item >
        <v-list-item-content>
          <v-list-item-title>鉄道会社</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>JR東日本</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item >
        <v-list-item-content>
          <v-list-item-title>製造</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>JT新津</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
	
      <v-divider></v-divider>

      <v-list-item >
        <v-list-item-content>
          <v-list-item-title>車両製造</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>2015/03</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
	
      <v-divider></v-divider>
      
      <v-list-item >
        <v-list-item-content>
          <v-list-item-title>形式</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>E235系</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    inset: false,
    items: [
      {
        pic: "/Picture/icon/building.svg",
        title: "A箇所",
        mail: "XX",
      },
      {
        divider: true,
      },
      {
        pic: "/Picture/icon/building.svg",
        title: "B箇所",
        mail: "XX",
      },
      {
        divider: true,
      },
      {
        pic: "/Picture/icon/sagyou.svg",
        title: "山田　太郎",
        mail: "XX",
      },
      {
        pic: "/Picture/icon/sagyou.svg",
        title: "野比　のび太",
        mail: "XX",
      },
    ],
  }),
};
</script>
