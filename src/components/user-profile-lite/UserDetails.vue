<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
  >
    <v-img height="250" :src="userDetails.src"></v-img>
    <v-card-title>{{userDetails.name}}</v-card-title>
    <v-card-subtitle>{{userDetails.keis}}</v-card-subtitle>
    <v-card-text>
      <div>
        {{userDetails.Specialnote}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip v-for="Specialchip in userDetails.Specialchips" v-bind:key="Specialchip">{{Specialchip}}</v-chip>
      </v-chip-group>
    </v-card-text>

  </v-card>
</template>

<script>
const defaultUserDetails = {
  name: "T'c 234 0001",
  keis: 'EXXX系',
  src: '/Picture/yamate1.jpg',
  Specialchips: ["モニタリング装置付き","ATS-Ps"],
  Specialnote: "2000/4/1からXX線で運用、2010/4/1からXX線に転配",

};

export default {
  name: 'user-details',
  props: {
    userDetails: {
      type: Object,
      default() {
        return defaultUserDetails;
      },
    },
  },
};
</script>
