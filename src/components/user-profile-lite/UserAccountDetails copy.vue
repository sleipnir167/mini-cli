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

      </v-card-text>
      <v-divider class="mt-12"></v-divider>
      <v-card-actions>
        <v-btn text>Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip
            v-if="formHasErrors"
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                class="my-0"
                v-bind="attrs"
                @click="resetForm"
                v-on="on"
              >
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn color="primary" text @click="submit">Submit</v-btn>
      </v-card-actions>
    </v-card>

    <v-list-group flush>
      <v-list-group-item class="p-3">
        <v-row>
          <v-col>
            <v-form>
              <v-form-row>

                <!-- 登録番号 -->
                <v-col md="6" class="form-group">
                  <label for="feFirstName">登録番号</label>
                  <v-form-input type="text" id="feFirstName" placeholder="登録番号" value="Sierra" />
                </v-col>

                <v-col cols="12" sm="6" md="3">
                  <v-text-field label="車種ID" >aa</v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="運用確定日">v</v-text-field>
                </v-col>

                <!-- Last Name -->
                <v-col md="6" class="form-group">
                  <label for="feLastName">Last Name</label>
                  <v-form-input type="text" id="feLastName" placeholder="Last Name" value="Brooks" />
                </v-col>

              </v-form-row>

              <v-form-row>

                <!-- Email -->
                <v-col md="6" class="form-group">
                  <label for="feEmail">Email</label>
                  <v-form-input type="email" id="feEmail" placeholder="Email Address" value="sierra@example.com" />
                </v-col>

                <!-- Password -->
                <v-col md="6" class="form-group">
                  <label for="fePassword">Password</label>
                  <v-form-input type="password" id="fePassword" placeholder="Last Name" value="EX@MPL#P@$$w0RD" />
                </v-col>

              </v-form-row>

              <!-- Address -->
              <div class="form-group">
                <label for="feInputAddress">Address</label>
                <v-form-input type="text" id="feInputAddress" placeholder="1234 Main St" />
              </div>

              <v-form-row>
                <!-- City -->
                <v-col md="6" class="form-group">
                  <label for="feInputCity">City</label>
                  <v-form-input type="text" id="feInputCity" />
                </v-col>

                <!-- State -->
                <v-col md="4" class="form-group">
                  <label for="feInputState">State</label>
                  <v-select :value="null" id="feInputState">
                    <option :value="null" selected>Choose...</option>
                    <option>...</option>
                  </v-select>
                </v-col>

                <!-- Zip Code -->
                <v-col md="2"  class="form-group">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip">
                </v-col>

              </v-form-row>

              <v-form-row>

                <!-- Description -->
                <v-col md="12" class="form-group">
                  <label for="feDescription">Description</label>
                  <v-textarea name="feDescription" rows="5"></v-textarea>
                </v-col>
              </v-form-row>

              <v-button type="submit" class="btn-accent">Update Account</v-button>

            </v-form>
          </v-col>
        </v-row>
      </v-list-group-item>
    </v-list-group>
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
    tmp: {
      type: String,
      default: 'XXX',
    },
  },
};
</script>
