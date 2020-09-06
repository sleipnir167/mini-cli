<template>
  <div id="SyasCombobox">
    <v-app>
      <v-select
        :items="FBsyasMaster"
        item-text="SyasName"
        item-value="SyasID"
        label="車種"
        v-model="SyasID"
      required>
      </v-select>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase/app"

export default {
  data() {
		return {
        items: [],
        SyasID: null,
        SyasName: null,
        FBsyasMaster: [],
    };
  },
  created(){
    this.selSyasMaster()
  },
  methods: {
		submit: function(){
			this.$emit('update',{
				syas: this.syas,
				SyasID: this.SyasID
			});
    },
    selSyasMaster () {
      try {
        const db = firebase.firestore();
        db.collection('syasMaster')  
          .get()  
          .then(snapshot => {  
            snapshot.forEach(doc => {  
              let item = doc.data();
              item.id = doc.id;
              this.FBsyasMaster.push(item);
              this.items.push(item.SyasName)
            })  
          }) 
        return true;
      }
      catch(e)
      {
        console.log("catchA");
        console.log(e);
        return false;
      }
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

