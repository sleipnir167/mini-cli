<template>
  <div id="daicho">
    <div id="demo">
      <form id="search2">
        検索 <input type="text" v-model="searchQuery" />
      </form>
      <temp-listsyaryou
        :heroes="gridData"
        :columns="gridColumns"
        :filterKey="searchQuery"
      >
      </temp-listsyaryou>
    </div>
  </div>
</template>

<script>
//  インポート
import Vue from "vue";
import ListSyaryou from "../components/Parts/ListSyaryou";

export default {
  data() {
    return {
      searchQuery: "",
      gridColumns: ["車両", "有効開始日", "有効終了日","所属1","所属2","所属3"],
      gridData: [
        { 車両: "Tc XX-0001", 有効開始日: "2020/01/01", 有効終了日: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A1所属" },
        { 車両: "M  XX-0002", 有効開始日: "2020/01/01", 有効終了日: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A1所属" },
        { 車両: "M' XX-0003", 有効開始日: "2020/01/01", 有効終了日: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A2所属" },
        { 車両: "Tc'XX-0004", 有効開始日: "2020/01/01", 有効終了日: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A2所属" },
        { 車両: "Tc XX-0005", 有効開始日: "2020/01/01", 有効終了日: "----/--/--" , 所属1: "AA総合セ" , 所属2: "ZZ所属" , 所属3: "B1所属" },
        { 車両: "Tc XX-0006", 有効開始日: "2020/01/01", 有効終了日: "----/--/--" , 所属1: "AA総合セ" , 所属2: "ZZ所属" , 所属3: "B2所属" },
      ],
    };
  },
};

//  コンポーネントを登録
Vue.component("temp-listsyaryou", ListSyaryou);
</script>

<style scoped>
#daicho {
  background-color: #ebebeb;
  overflow:scroll;
  width:100%;
  height:100%;
  margin:10px;
}

</style>
