<template>
  <div class="Daicho">
    <!-- 枠 -->
    <div class="body-group d-flex flex-column">
      <!-- ヘッダー -->

      <div class="header-group sticky-top">
        <header class="Header">
          <div class="container">
            <p class="text-muted">ミニ車両管理システム</p>
          </div>
        </header>
      </div>

      <!-- 中央領域 -->
      <div class="center-group d-flex flex-row">
        <!-- 左側領域 -->
        <div class="left-group d-flex flex-column">
          <div class="button-group d-flex flex-column">
            <button
              type="button"
              class="btn btn-secondary leftG"
              onclick="location.href='http://msok.mydns.jp:5500/index.html'"
            >
              お知らせ
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="location.href='http://msok.mydns.jp:5500/2.html'"
            >
              車両台帳
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="location.href='http://msok.mydns.jp:5500/3.html'"
            >
              検査計画
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="location.href='http://msok.mydns.jp:5500/4.html'"
            >
              使用実績
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="location.href='http://msok.mydns.jp:5500/5.html'"
            >
              研修管理
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="location.href='http://msok.mydns.jp:5500/6.html'"
            >
              装備管理
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onclick="location.href='http://msok.mydns.jp:5500/7.html'"
            >
              マスタ管理
            </button>
          </div>
        </div>
        <!-- 中央領域 -->
<div class="center-cente-group">

          <form class="form-horizontal">

            <!-- <div class="form-group">
              <label for="name" class="col col-xs-12 col-sm-4 col-md-3 control-label">お名前</label>
              <div class="col col-xs-5 col-sm-3 col-md-3">
                <input type="text" name="name1" id="name1" class="form-control" placeholder="姓">
              </div>
              <div class="col col-xs-5 col-sm-3 col-md-3">
                <input type="text" name="name2" id="name2" class="form-control" placeholder="名">
              </div>
              <div class="col-xs-offset-2 col-sm-offset-2 col-md-offset-3"></div>
            </div> -->

            <div class="form-row m-3">
              <div class="形式 form-group">
                <label for="text5a">形式:</label>
                <label class="sr-only" for="text5a">形式</label>
                <input type="text" class="form-control mb-2" id="text5a" placeholder="形式"/>
              </div>
              <div class="車号 form-group">
                  <label for="text5b"><span>車号:</span></label>
                  <label class="sr-only" for="text5b">車号</label>
                <input type="text" class="form-control mb-2" id="text5b" placeholder="車号"
                />
              </div>
            </div>
        
            <div class="form-row m-3">
              <div class="所属1 form-group">
                <label for="group1">所属1:</label>
                <select id="group1" class="form-control">
                  <option></option>
                  <option>秋田車両センター</option>
                  <option>新潟車両センター</option>
                </select>
              </div>
              <div class="所属2 form-group">
                <label for="group2">所属2:</label>
                <select id="group2" class="form-control">
                  <option></option>
                  <option>ロングシート</option>
                  <option>A車両グループ</option>
                  <option>B車両グループ</option>
                </select>
              </div>
              <div class="所属3 form-group">
                <label for="group3">所属3:</label>
                <select id="group3" class="form-control">
                  <option></option>
                  <option>H101</option>
                  <option>山手線</option>
                  <option>XX編成</option>
                </select>
              </div>
            </div>
          
              <div class="form-row m-3">
                <input type="submit" class="btn btn-primary" />
              </div>
          </form>
        </div>
        
      </div>

      <!-- フッター -->
      <footer class="Footer fixed-bottom">
        <div class="container">
          <p class="text-muted">この辺に説明を出す</p>
        </div>
      </footer>
    </div>

  </div>
</template>


<style scoped>
html {
  overflow: hidden;
}

html body {
  overflow: hidden;
}

.header-group {
  height: 30px;
  background-color: #3eb623;
}

.center-group {
  background-color: #6c757d;
  height: auto;
  width: auto;
}

.center-group .left-group {
  min-width: 110px;
  max-width: 110px;
  height: 100vh;
}

.center-group .left-group .button-group .btn-secondary {
  border-radius: 0px;
}

.center-group .card {
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}

.center-group .container {
  border: solid 2px orange;
}

.center-group .center-cente-group {
  width: 100%;
  background-color: #ebebeb;
}

.Footer {
  height: 30px;
  background-color: #3eb623;
}

#calendar {
  border: solid 1px red;
  overflow: hidden;
}

#calendar .waku-Head {
  color: blue;
}

#calendar .waku-Data {
  color: blue;
}

#calendar .waku-left {
  color: blue;
  min-width: 150px;
}

#calendar .waku-right {
  color: blue;
  overflow-x: scroll;
}

#calendar .KensaGridLeftP {
  white-space: nowrap;
}

#calendar .KensaGridLeftP .KensaGridLeftC {
  height: 40px;
  text-align: center;
  border: solid 1px;
}

#calendar .KensaGridDataP {
  white-space: nowrap;
}

#calendar .KensaGridDataP .KensaGridDataC {
  height: 40px;
  width: 40px;
  display: inline-block;
  text-align: center;
  border: solid 1px;
}
</style>