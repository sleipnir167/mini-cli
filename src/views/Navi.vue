<template>
  <div class="Navi">
    <ol class="stepBar">
      <li class="visited"><span>1</span><br>新車登録</li>
      <li><span>2</span><br>検査登録</li>
      <li><span>3</span><br>装備入力</li>
      <li><span>4</span><br>その他</li>
      <li><span>5</span><br>確認</li>
      <li><span>6</span><br>完了</li>
    </ol>
    <div class="NaviMain">

    </div>
    <div class="button">
      <input type="button" class="btn btn-primary" value="<<" />
      <input type="button" class="btn btn-primary" value=">>" />
    </div>
  </div>
</template>

<style>
.stepBar {
  display: flex;
  max-width: 400px;
  position: relative;
  margin: 20px auto;
  text-align: center;
}
.stepBar li {
  font-size: 12px;
  list-style: none;
  position: relative;
  width: 33.333%;
}
.stepBar li:after {
  background: #3eb623;
  content: "";
  width: calc(100% - 24px);
  height: 4px;
  position: absolute;
  left: calc(-50% + 12px);
  top: 10px;
}
.stepBar li:first-child:after {
  display: none;
}
.stepBar li span {
  background: #3eb623;
  color: #ffffff;
  display: inline-block;
  height: 24px;
  margin-bottom: 5px;
  line-height: 24px;
  width: 24px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.stepBar .visited:after {
  background: #4D648D;
}
.stepBar .visited span {
  background: #4D648D;
}

.NaviMain{
  height:600px;
  border: solid 1px red;
}
</style>