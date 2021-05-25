mponents/Signin.vue
<template>
  <div class="signin">
    <v-app>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">ログイン</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" v-model="username"/>
            <v-text-field v-bind:type="showPassword ? 'text' : 'password'" 
                          prepend-icon="mdi-lock" 
                          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                          label="パスワード" 
                          @click:append="showPassword = !showPassword" 
                          v-model="password"/>
            
            <v-card-actions>
              <v-btn class="info" @click="signIn">ログイン</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>

<!--     
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p> -->
  </div>
</template>

<script>
// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"

export default {
  name: 'Signin',
  data: function () {
    return {
      showPassword : false,
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      // firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
      //   user => {
      //     alert('Success!')
      //     this.$router.push('/')
      //     console.log(user);
      //   },
      //   err => {
      //     alert(err.message)
      //   }
      // )
    }
  }
}
</script>

<style scoped>
 /* 省略 */
</style>