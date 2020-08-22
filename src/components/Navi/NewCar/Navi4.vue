<template>
  <div id="NewCarNavi4" class="container mt-5">
    <form @input="submit">
      <h2>User Info</h2>
      <div class="form-group">
        <label for="Birthday">Birthday</label>
        <input
          type="date"
          class="form-control"
          v-model="birthday"
          placeholder="Enter Birthday"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      birthday: null,
    };
  },
  methods: {
    submit: function() {
      this.$emit("update", {
        birthday: this.birthday,
      });
    },
  },
};
</script>

<style>
</style>
