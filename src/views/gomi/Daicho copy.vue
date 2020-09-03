<template>
  <!-- 中央領域 -->
  <div id="daicho">
    <div class="center-cente-group">
      <form class="form-horizontal">
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
</template>

<style>
#daicho {
  margin: 5px;
}
</style>