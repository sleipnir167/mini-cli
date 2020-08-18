<template>
  <div id="daicho">
    <div id="demo">
      <form id="search">
        検索 <input name="query" v-model="searchQuery" />
      </form>
      <temp-listsyaryou
        :heroes="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
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
      gridColumns: ["SGO", "FYMD", "TYMD","所属1","所属2","所属3"],
      gridData: [
        { SGO: "Tc XX-0001", FYMD: "2020/01/01", TYMD: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A1所属" },
        { SGO: "M  XX-0002", FYMD: "2020/01/01", TYMD: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A1所属" },
        { SGO: "M' XX-0003", FYMD: "2020/01/01", TYMD: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A2所属" },
        { SGO: "Tc'XX-0004", FYMD: "2020/01/01", TYMD: "----/--/--" , 所属1: "AA総合セ" , 所属2: "XX所属" , 所属3: "A2所属" },
        { SGO: "Tc XX-0005", FYMD: "2020/01/01", TYMD: "----/--/--" , 所属1: "AA総合セ" , 所属2: "ZZ所属" , 所属3: "B1所属" },
        { SGO: "Tc XX-0006", FYMD: "2020/01/01", TYMD: "----/--/--" , 所属1: "AA総合セ" , 所属2: "ZZ所属" , 所属3: "B2所属" },
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
