<template>
  <div id="SyasCombobox">
    <v-app>
      <v-select
        :items="FBsyasMaster"
        item-text="SyasName"
        item-value="SyasID"
        label="車種"
        v-model="SelItem"
      required>
      </v-select>
    </v-app>
  </div>
</template>

<script>

export default {
  props:{
    FBsyasMaster: null,
    SelItem: null,
  },
  data() {
		return {
        SyasID: null,
        SyasName: null,
        // FBsyasMaster: [],
    };
  },
  created(){
  },
  methods: {
		submit: function(){
			this.$emit('update',{
				syas: this.syas,
				SyasID: this.SyasID
			});
    },
	}
};
</script>

<style scoped>
#SyasCombobox{
  width:400px;
  height:100px;
  overflow:hidden;
}
</style>

