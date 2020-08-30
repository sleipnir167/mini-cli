<template>
  <div id="MasterSyasyu">
    <v-app id="inspire">
      <v-icon color="blue" @click="getData" >mdi-plus-circle</v-icon>
      <!-- <button  value="test" style="height=10px;width=10px;background-color:blue;" >tewat</button> -->
      <v-container>
        <v-row>
          <v-col cols="10">
            <v-data-table
              :headers="headers"
              :items="items"
            >
              <template v-slot:[`headers.Add`]="{ header }">
                <v-btn small outlined rounded color="red" @click="deleteItem(header)">Add</v-btn>
              </template>

              <template v-slot:[`item.delete`]="{ item }">
                <v-btn small outlined rounded color="red" @click="deleteItem(item)">Delete</v-btn>
              </template>
            </v-data-table>
            
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase/app"
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  created(){
    this.getData();
  },
  data () {
    return {
      headers: [
          { 
            text: '車種ID', 
            value: 'Syas' 
          },
          {
            text: '車種名',
            value: 'SyasName',
          },
          {
            text:'削除',
            value:'delete',
            sortable:false
          },
          {
            text:'追加',
            value:'Add',
            sortable:false
          }
        ],
      items:[
        { 
          Syas : 2 , 
          SyasName : "EC"
        },
        { 
          Syas : 3 , 
          SyasName : "ED"
        },
        { 
          Syas : 4 , 
          SyasName : "DL"
        },
      ]
    }
  },
  methods: {
    submit () {
          console.log("SUBMIT") 
      const db = firebase.firestore()
      let dbUsers = db.collection('syas')
      dbUsers
      .add({
        name: this.user.name,
        email: this.user.email,
      })
      .then(ref => {
        console.log('Add ID: ', ref.id)
      })
    },
    getData () {
      console.log("GETDATA") 
      try {
        // 全消し
        this.items.splice(0, this.items.length);
        const db = firebase.firestore();
        db.collection('syasMaster')  
          .get()  
          .then(snapshot => {  
            snapshot.forEach(doc => {  
              let item = doc.data();
              item.id = doc.id;
              this.items.push(item);
              console.log(item);
            })  
          }) 
      }
      catch(e)
      {
        console.log("catch");
        console.log(e);
      }
    },
    deleteItem (item) {
      const index = this.items.indexOf(item)
      confirm('削除しますよろしいですか？') && this.items.splice(index, 1)
    },
  },
}
</script>