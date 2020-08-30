<template>
  <div id="Main">
    <!-- 枠 -->
    <div class="Main-group d-flex flex-column">
      <!-- ヘッダー -->
      <div class="header-group sticky-top">
        <header class="Header">
          <!-- タイトル -->
          <p class="title">ミニ車両管理システム</p>
        </header>
      </div>

      <!-- 中央領域 -->
      <div class="center-group d-flex flex-row">
        <!-- 左側領域 -->
        <div class="center-left-group d-flex flex-column">
          <form-Menu></form-Menu>
        </div>
        <!-- 中央領域 -->
        <div class="center-cente-group">
          <router-view />
        </div>
      </div>

      <!-- フッター -->
      <footer class="Footer fixed-bottom">
        <p>Place sticky footer content here.（ここに説明を出す）</p>
      </footer>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import Menu from './views/Menu';

//  コンポーネントを登録
Vue.component("form-Menu", Menu);

export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

$leftwidth:260px;

html {
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html body {
  overflow: hidden;
}

.Main-group {
  
  & .header-group {
    height: 30px;
    /* background: linear-gradient(90deg, #6C9BD2, #152d4b); */
    background-color: black;
    color: #6c9bd2;
    overflow: hidden;
  }

  & .center-group {
    background-color: #6c757d;
    height: calc(100vh - 60px);
    width: auto;
    overflow: hidden;
    
    & .center-left-group {
      min-width: $leftwidth;
      max-width: $leftwidth;
      background-color: rgba(0,0,0,.87);
      
    }

    & .center-cente-group {
      width: calc(100% - 110px);
      background-color: #ebebeb;
    }
  }

  & .Footer {
    height: 30px;
    background-color: #6c9bd2;
    color: black;
  }
}

.Main-group > .center-group > .center-left-group > .button-group {
  border-radius: 0px;
}


/* JR_COLOR=#3eb623 */
/* JEIS_COLOR=#6C9BD2 */
</style>
