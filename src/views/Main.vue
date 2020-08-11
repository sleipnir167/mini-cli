<template>
  <div id="Main">
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
            <button type="button" class="btn btn-secondary leftG" onclick="location.href='http://msok.mydns.jp:5500/index.html'">
              お知らせ
            </button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/2.html'">車両台帳</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/3.html'">検査計画</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/4.html'">使用実績</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/5.html'">研修管理</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/6.html'">装備管理</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/7.html'">マスタ管理</button>
          </div>
        </div>
        <!-- 中央領域 -->
        <div class="center-cente-group">
          <div
            class="card text-white bg-primary m-2 d-inline-block"
            style="max-width: 20rem;"
          >
            <div class="card-header">あれのおしらせ</div>
            <div class="card-body">
              <p class="card-title">あれがあれです。</p>
              <p class="card-text">あれしてください。</p>
            </div>
          </div>
          <div
            class="card text-white bg-dark m-2 d-inline-block"
            style="max-width: 20rem;"
          >
            <div class="card-header">それのおしらせ</div>
            <div class="card-body">
              <p class="card-title">それがそれです。</p>
              <p class="card-text">それしてください。</p>
            </div>
          </div>

          <div
            class="card text-black alert-primary m-2 d-inline-block"
            style="max-width: 20rem;"
          >
            <div class="card-header">あれのおしらせ</div>
            <div class="card-body">
              <p class="card-title">あれがあれです。</p>
              <p class="card-text">あれしてください。</p>
            </div>
          </div>
          <div
            class="card text-black alert-dark m-2 d-inline-block"
            style="max-width: 20rem;"
          >
            <div class="card-header">それのおしらせ</div>
            <div class="card-body">
              <p class="card-title">それがそれです。</p>
              <p class="card-text">それしてください。</p>
            </div>
          </div>

          <div class="card">
            <h4 class="card-header">管理者からのお知らせ</h4>
            <div class="card-body">
              <h5 class="card-title">
                2020/8/11〜2020/8/16はお盆でお休みです。
              </h5>
              <p class="card-text">
                詳細は下のリンクから確認してください。
              </p>
              <a href="#!" class="btn btn-primary">詳細はここをクリック</a>
            </div>
          </div>
          

          <div class="info m-2 border border-primary">
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>日付</th>
                  <th>所属1</th>
                  <th>所属2</th>
                  <th>所属3</th>
                  <th>車種</th>
                  <th>車両</th>
                  <th>記事</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-danger">
                  <th scope="row">1</th>
                  <td>200/8/4</td>
                  <td>AA総合セ</td>
                  <td>XX所属</td>
                  <td>XX所属</td>
                  <td>H101</td>
                  <td>TC 101 0001</td>
                  <td>A保全が検査切れが警告域です</td>
                </tr>
                <tr class="table-danger">
                  <th scope="row">1</th>
                  <td>200/8/4</td>
                  <td>AA総合セ</td>
                  <td>XX所属</td>
                  <td>XX所属</td>
                  <td>H101</td>
                  <td>TC 101 0002</td>
                  <td>A保全が検査切れが警告域です</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>200/8/4</td>
                  <td>AA総合セ</td>
                  <td>XX所属</td>
                  <td>XX所属</td>
                  <td>H101</td>
                  <td>TC 101 001</td>
                  <td>本日仕業検査予定日です。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- フッター -->
      <footer class="Footer fixed-bottom">
        <div class="container">
          <p class="text-muted">Place sticky footer content here.</p>
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