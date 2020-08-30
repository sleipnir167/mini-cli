<template>
  <div id="MasterSyaryou">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="SyasID"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>車種マスタ</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">

              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >New Item</v-btn>
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
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  data: () => ({
    dialog: false,
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
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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

  methods: {
    initialize () {
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

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('削除すると戻すことができません。本当に削除しますか?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>