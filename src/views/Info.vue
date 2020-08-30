<template>
  <div id="Info">

    <!-- 中央領域 -->
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
</template>


<style scoped>
#Info {
  background-color: #ebebeb;
  overflow:scroll;
  width:100%;
  height:100%;
  margin: 5px;
}

#Info > .card {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}

</style>
