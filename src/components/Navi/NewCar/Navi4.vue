<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h2>その他</h2>
    <v-container ma-4 pa-0>
      <v-row>
        <v-col cols="3">
          <v-text-field v-model="KsGun" :counter="5" :rules="nameRules" label="その他" required outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox> -->

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      次へ
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      KsGun: null,

      valid: true,
      nameRules: [
        (v) => !!v || "入力してください",
        (v) => (v && v.length <= 5) || "入力できるのは5文字までです。",
      ],
    };
  },
  methods: {
    submit: function() {
      this.$emit("update", {
        KsGun: this.KsGun,
        tel: this.tel,
      });
	},
	validate () {
      if(this.$refs.form.validate()){
        this.submit()
          this.$emit('nextStep');
      }
    },
  },
};
</script>

<style></style>
