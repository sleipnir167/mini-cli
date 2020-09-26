<template>
  <div>
    <v-app id="inspire">
    <v-container fluid class="main-content-container px-4">
      <!-- Page Header -->

      <v-row no-gutters class="page-header py-4">
        <table class="carset-table">
          <tbody>
            <tr>
              <td v-for="henseiData in henseiDatas" :key="henseiData" v-bind:class="{'is-highlight': henseiData.gosya === selectgosya}" @click="gosyaClick(henseiData);">
                <div class="carset-table__number">
                  <span class="carset-table__num">{{henseiData.gosya}}</span>号車<span class="carset-table__num"></span>
                </div>
                <div class="carset-table__series">
                  <!-- <a href="/car/7784" title="鉄道車両：JR東日本 クハE235-1"> -->
                    {{henseiData.sgo}}
                  <!-- </a> -->
                </div>
              </td><!-- //td -->
            </tr>
          </tbody>
        </table>
      </v-row>

      <!-- Content -->
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" >
          <uplUserDetails />
          <uplUserCharge />
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8">
          <uplUserAccountDetails />
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="12">
          <uplUserHistorys />
        </v-col>
      </v-row>
    </v-container>
    </v-app>
  </div>
</template>

<script>
import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
import UserCharge from '@/components/user-profile-lite/UserCharge.vue';
import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';
import UserHistory from '@/components/user-profile-lite/UserHistory.vue';

export default {
  name: 'user-profile-lite',
  components: {
    uplUserDetails: UserDetails,
    uplUserCharge: UserCharge,
    uplUserAccountDetails: UserAccountDetails,
    uplUserHistorys: UserHistory,
  },
  data(){
    return{
      selectgosya:2,
      henseiDatas:[
        {gosya:1,sgo:"クハE234-1",},
        {gosya:2,sgo:"モハE234-3",},
        {gosya:3,sgo:"モハE235-3",},
        {gosya:4,sgo:"サハE235-1",},
        {gosya:5,sgo:"モハE234-2",},
        {gosya:6,sgo:"モハE235-2",},
        {gosya:7,sgo:"サハE234-1",},
        {gosya:8,sgo:"モハE234-1",},
        {gosya:9,sgo:"モハE235-1",},
        {gosya:10,sgo:"サハE235-4620",},
        {gosya:11,sgo:"クハE235-1",},
      ]
    }
  },
  methods: {
    // 選択号車を変更
    gosyaClick(value) {
      this.selectgosya = value.gosya;
    }
  }
};
</script>

<style lang="scss">

// 号車
.carset-table__number {
  font-size: 10px;
  line-height: 1;
  margin-bottom: 2px;
}

.carset-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 6px 0;
    position: relative;
}

.carset-table__series {
    font-size: 10px;
}

.carset-table td {
    text-align: center;
    border: 1px solid #351c12;
    padding: 4px 0;
    position: relative;
    background-color: white;
    min-width: 60px;
}

.carset-table td:first-child:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    border: 10px solid #351c12;
    border-right-color: transparent;
    border-bottom-color: transparent;
}
.carset-table td:before {
    content: "";
    display: block;
    height: 1px;
    width: 8px;
    border-bottom: 3px solid #351c12;
    position: absolute;
    left: -8px;
    bottom: 10px;
}

.carset-table td:first-child:after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    height: 0;
    width: 0;
    border: 10.3px solid #ebebeb;
    border-right-color: transparent;
    border-bottom-color: transparent;
}

// 選択色
.carset-table td.is-highlight {
  background-color: #f9f3bb;
}

.carset-table td:last-child:before {
    display: none;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: auto;
    right: 0 !important;
    height: 0;
    width: 0;
    border: 10px solid #351c12;
    border-left-color: transparent;
    border-bottom-color: transparent;
}

.carset-table td:last-child:after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    right: -1px !important;
    height: 0;
    width: 0;
    border: 10.3px solid #ebebeb;
    border-left-color: transparent;
    border-bottom-color: transparent;
}

</style>