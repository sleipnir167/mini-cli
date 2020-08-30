<template>
  <div id="NewCarNavi5" class="container mt-5">
    <div>
			<h2>登録内容</h2>
      <p>車種: {{ form.syas }}</p>
      <p>形式: {{ form.keis }}</p>
      <p>車体番号: {{ form.syaNo }}</p>
      <p>新製日: {{ form.NewYmd }}</p>
      <p>箇所1: {{ form.kasho1 }}</p>
      <p>箇所2: {{ form.kasho2 }}</p>
      <p>箇所3: {{ form.kasho3 }}</p>
      <p>検査周期群: {{ form.KsGun }}</p>
    </div>
       <button
     type="button"
     @click="submit"
   >
     Submit
   </button>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  props:{
		form: Object
  },
   data () {
   return {
     user: {
       name: "",
       email: ""
     },
   }
 },
 methods: {
  submit () {
    const db = firebase.firestore()
    let dbUsers = db.collection('SyaryouDaicho')
    dbUsers
      .add({
        syas: this.form.syas,
        keis: this.form.keis,
        syaNo: this.form.syaNo,
        NewYmd: this.form.NewYmd,
        KsGun: this.form.KsGun,
      })
      .then(ref => {
        console.log('Add ID: ', ref.id)
      }
    )
  },
  mod () {
    const db = firebase.firestore()
    let dbUsers = db.collection('SyaryouDaicho').doc('doc名')
    dbUsers.set({
      syas: this.form.syas,
      keis: this.form.keis,
      syaNo: this.form.syaNo,
      NewYmd: this.form.NewYmd,
      KsGun: this.form.KsGun,
      }).then(ref => {
        console.log('Add ID: ', ref.id)
      }
    )
   },
  getData () {
    const db = firebase.firestore()
    let docUsers = db.collection('SyaryouDaicho').doc('8Ner2tNFSFmXYq3hDYck')
    docUsers.get().then(function(doc) {
      document.getElementById("user.name").innerHTML = (doc.data().name)
    })
  },
 },
};
</script>

<style>
</style>
