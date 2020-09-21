<template>
  <v-card class="card-small mb-4">

    <!-- Card Header -->
    <v-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </v-card-header>

    <v-card ref="form">
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <label>車種</label>
            <v-text-field ref="syas" v-model="syas" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>系式</label>
            <v-text-field ref="keis" v-model="keis" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>型式</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>種別</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>用途</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>乗車定員</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>最大積載量</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>排気量</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>所有者</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>使用者</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
        </v-row>
        <!-- 区切り -->
        <v-divider></v-divider>
        <v-row>
          <v-col cols="3">
            <label>所属</label>
            <v-text-field ref="tmp" v-model="syas" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>型式</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>種別</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>用途</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>乗車定員</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>最大積載量</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>排気量</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>所有者</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="3">
            <label>使用者</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      
    </v-card>

  </v-card>
</template>

<script>
export default {
  name: 'user-account-details',
  props: {
    title: {
      type: String,
      default: 'Account Details',
    },
    syas: {
      type: String,
      default: 'EC',
    },
    keis: {
      type: String,
      default: 'E231系',
    },
    teiin: {
      type: String,
      default: '1,524名',
    },
    tmp: {
      type: String,
      default: 'XXX',
    },
  },
};
</script>
