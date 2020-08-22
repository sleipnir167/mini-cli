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
          <div class="button-group d-flex flex-column">
            <router-link class="btn btn-secondary" to="/Info"
              >お知らせ</router-link
            >
            <router-link class="btn btn-secondary" to="/Daicho"
              >車両台帳</router-link
            >
            <router-link class="btn btn-secondary" to="/Kensa"
              >検査計画</router-link
            >
            <router-link class="btn btn-secondary" to="/Tmp"
              >使用実績</router-link
            >
            <router-link class="btn btn-secondary" to="/Tmp"
              >検修管理</router-link
            >
            <router-link class="btn btn-secondary" to="/Tmp"
              >装備管理</router-link
            >
            <router-link class="btn btn-secondary" to="/Tmp"
              >マスタ管理</router-link
            >
            <router-link class="btn btn-secondary" to="/Navi"
              >操作ナビ</router-link
            >
            <router-link class="btn btn-secondary" to="/Graph"
              >グラフ</router-link
            >
            <router-link class="btn btn-secondary" to="/Tmp">TMP</router-link>
          </div>
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

<style scoped>
html {
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html body {
  overflow: hidden;
}

.Main-group > .header-group {
  height: 30px;
  /* background: linear-gradient(90deg, #6C9BD2, #152d4b); */
  background-color: black;
  color: #6c9bd2;
  overflow: hidden;
}

.Main-group > .center-group {
  background-color: #6c757d;
  height: calc(100vh - 60px);
  width: auto;
  overflow: hidden;
}

.Main-group > .center-group > .center-left-group {
  min-width: 110px;
  max-width: 110px;
}

.Main-group > .center-group > .center-cente-group {
  width: calc(100% - 110px);
  background-color: #ebebeb;
}

.Main-group > .center-group > .center-left-group > .button-group {
  border-radius: 0px;
}

.Main-group > .Footer {
  height: 30px;
  background-color: #6c9bd2;
  color: black;
}

/* JR_COLOR=#3eb623 */
/* JEIS_COLOR=#6C9BD2 */
</style>
