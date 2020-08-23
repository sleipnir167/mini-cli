<template>
  <div class="Login">
    <div id="app" class="container mt-5">
      <h2>ユーザ登録画面</h2>
      <div class="row">
          <div class="col-sm-8">
              <form @submit.prevent="registerUser">
                  <div class="form-group">
                      <label for="email">メールアドレス:</label>
                      <input type="email" class="form-control" id="email" v-model="email">
                  </div>
                  <div class="form-group">
                    <label for="password">パスワード:</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                  </div>
                  <button type="submit" class="btn btn-info">登録</button>
              </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-auth.js"></script>

<script>

</script>

<style scoped>


</style>
