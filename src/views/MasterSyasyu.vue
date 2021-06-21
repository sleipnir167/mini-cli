<template>
  <div id="MasterSyaryou">
    <v-app id="inspire">

      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        :sort-by="['SyasID']"
        :sort-desc="[false, true]"
        multi-sort
        class="elevation-1"
        item-key="SyasID"
        :loading="Lstate" loading-text="Loading... Please wait"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>車種マスタ</v-toolbar-title>
            <!-- ソート -->
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>

            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">

              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2" fab dark color="blue"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
    
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.SyasID" label="車種ID"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.SyasName" label="車種名"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
    
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" outlined @click="close">取消</v-btn>
                  <v-btn color="blue darken-1" dark @click="save">保存</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  data: () => ({
    dialog: false,
    Lstate:true,
    search: '',
    syasData: null,
    headers: [
      { text: '車種ID', value: 'SyasID', },
      { text: '車種', value: 'SyasName' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      SyasID: '',
      SyasName: "",
    },
    defaultItem: {
      SyasID: '',
      SyasName: "",
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新規登録' : '修正'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize()
  },

  mounted(){
    setTimeout(() => {
      this.Lstate = false;
    }, 500);


    // // ■ローカル取得
    // axios.get('http://localhost:3000/syas/',
    // {
    //   params: {
    //     results: '10'
    //   }
    // })
    // .then(response => this.desserts = response.data.rows)
    // ■ローカル取得
    axios.get('http://localhost:3000/syas/',
    {
      params: {
        results: '10'
      }
    })
    .then(response => this.desserts = response.data.rows)
    // .then(response => console.log("aa" + response.status))

    console.log(this.desserts);
  },

  methods: {
    initialize () {
      // this.selFireBase();
      // this.sampleData();
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    AddItem (item) {
      const index = this.desserts.indexOf(item)
      if(confirm('削除すると戻すことができません。本当に削除しますか?'))
      {

      // ■ローカル取得
      axios.delete('http://localhost:3000/syas/' & item.SyasID,
      {
        params: {
        }
      })
      // .then(response => this.desserts = response.data)

      //   if(!this.delFireBase(item)){
      //     alert("削除エラー");
      //     return false;
      //   }
        this.desserts.splice(index, 1)
      } 
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      if(confirm('削除すると戻すことができません。本当に削除しますか?'))
      {
        // const id = '10';
        //const params = { name: 'SyasID' };

        // const params = new URLSearchParams();
        // params.append('SyasID', item.SyasID);
        // console.log(item.SyasID);

        // ■ローカル取得
        // axios.delete('http://localhost:3000/syas/' + id,
        //   {
        //     headers: {'Content-Type': 'application/json'},
        //     // data: params
        //   }
        // );
        axios.delete('http://localhost:3000/syas/' + item.SyasID,
          {
            headers: {'Content-Type': 'application/json'},
            // data: params
          }
        );

        // axios.delete("http://localhost:3000/syas/11", {
        //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //     // params: { foo: 'bar' } //{foo:'bar'}が送りたいデータ
        // })
        // axios.delete('http://localhost:3000/syas/' + item.SyasID,
        // {
        //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //   params: {
        //   }
        // })
      // .then(response => this.desserts = response.data)

      //   if(!this.delFireBase(item)){
      //     alert("削除エラー");
      //     return false;
      //   }
        this.desserts.splice(index, 1)
      } 
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      console.log("test");
      if (this.editedIndex > -1) {//修正

        const params = new URLSearchParams();
        params.append('SyasID', this.editedItem.SyasID);
        params.append('SyasName', this.editedItem.SyasName);

        console.log(this.editedItem.SyasID);
        axios.patch('http://localhost:3000/syas', params);

      } else {//新規
      
        const params = new URLSearchParams();
        params.append('SyasID', this.editedItem.SyasID);
        params.append('SyasName', this.editedItem.SyasName);

        console.log(this.editedItem.SyasID);
        axios.post('http://localhost:3000/syas', params);


        // axios.post('http://localhost:3000/syas',
        // {
        //   params: {
        //     SyasID: this.editItem.SyasID,
        //     SyasName: this.editItem.SyasName
        //   }
        // })

        // if(!this.insFireBase()){
        //   alert("追加エラー");
        //   return false;
        // }
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    sampleData () {
      this.desserts = [
        {
          SyasID: '0',
          SyasName: "SL",
        },
        {
          SyasID: '1',
          SyasName: "EL",
        },
        {
          SyasID: '2',
          SyasName: "EC",
        },
        {
          SyasID: '3',
          SyasName: "DL",
        },
        {
          SyasID: '4',
          SyasName: "DC",
        },
        {
          SyasID: '5',
          SyasName: "PC",
        },
        {
          SyasID: '6',
          SyasName: "TEC",
        },
        {
          SyasID: '7',
          SyasName: "FC",
        },
      ]
    },
  },
}
</script>