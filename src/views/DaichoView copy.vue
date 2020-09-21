<template>
    <v-app id="inspire">
      <!-- ローディング -->
      <!-- <div v-if="DispLoading" id="DispLoading">
        <v-progress-circular indeterminate />
      </div> -->
      <v-main>
      <v-container fluid>



        <!-- End Main Sidebar -->
        <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
          <div class="main-navbar sticky-top bg-white">
            <!-- Main Navbar -->
            <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">

              <nav class="nav">
                <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                  <i class="material-icons">&#xE5D2;</i>
                </a>
              </nav>
            </nav>
          </div>
          <!-- / .main-navbar -->
          <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <i class="fa fa-check mx-2"></i>
            <strong>Success!</strong> Your profile has been updated! </div>
          <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Overview</span>
                <h3 class="page-title">User Profile</h3>
              </div>
            </div>
            <!-- End Page Header -->
            <!-- Default Light Table -->
            <div class="row">
              <div class="col-lg-4">
                <div class="card card-small mb-4 pt-3">
                  <div class="card-header border-bottom text-center">
                    <div class="mb-3 mx-auto">
                      <!-- <img class="rounded-circle" src="@/assets/logo.png" alt="User Avatar" width="110"> </div> -->
                    <h4 class="mb-0">Sierra Brooks</h4>
                    <span class="text-muted d-block mb-2">Project Manager</span>
                    <button type="button" class="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                      <i class="material-icons mr-1">person_add</i>Follow</button>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item px-4">
                      <div class="progress-wrapper">
                        <strong class="text-muted d-block mb-2">Workload</strong>
                        <div class="progress progress-sm">
                          <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100" style="width: 74%;">
                            <span class="progress-value">74%</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item p-4">
                      <strong class="text-muted d-block mb-2">Description</strong>
                      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="card card-small mb-4">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">Account Details</h6>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item p-3">
                      <div class="row">
                        <div class="col">
                          <form>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feFirstName">First Name</label>
                                <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"> </div>
                              <div class="form-group col-md-6">
                                <label for="feLastName">Last Name</label>
                                <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feEmailAddress">Email</label>
                                <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"> </div>
                              <div class="form-group col-md-6">
                                <label for="fePassword">Password</label>
                                <input type="password" class="form-control" id="fePassword" placeholder="Password"> </div>
                            </div>
                            <div class="form-group">
                              <label for="feInputAddress">Address</label>
                              <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"> </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="feInputCity">City</label>
                                <input type="text" class="form-control" id="feInputCity"> </div>
                              <div class="form-group col-md-4">
                                <label for="feInputState">State</label>
                                <select id="feInputState" class="form-control">
                                  <option selected>Choose...</option>
                                  <option>...</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"> </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-12">
                                <label for="feDescription">Description</label>
                                <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                              </div>
                            </div>
                            <button type="submit" class="btn btn-accent">Update Account</button>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Default Light Table -->
          </div>
          <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
            </ul>
            <span class="copyright ml-auto my-auto mr-2">Copyright © 2018
              <a href="https://designrevision.com" rel="nofollow">DesignRevision</a>
            </span>
          </footer>
        </main>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <base-material-card>
              <template v-slot:heading>
                <div class="display-2 font-weight-light">Edit Profile</div>
                <div class="subtitle-1 font-weight-light">
                  Complete your profile
                </div>
              </template>

              <v-form>
                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field label="Company (disabled)" disabled />
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field class="purple-input" label="User Name" />
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field label="Email Address" class="purple-input"/>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field label="First Name" class="purple-input" />
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field label="Last Name" class="purple-input" />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field label="Adress" class="purple-input" />
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field label="City" class="purple-input" />
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field label="Country" class="purple-input" />
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field class="purple-input" label="Postal Code" type="number"/>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea class="purple-input" label="About Me" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    </v-col>

                    <v-col cols="12" class="text-right">
                      <v-btn color="success" class="mr-0">Update Profile</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </base-material-card>
          </v-col>

          <v-col cols="12" md="4">
            <base-material-card
              class="v-card-profile"
              avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
              <v-card-text class="text-center">
                <h6 class="display-1 mb-1 grey--text">
                  CEO / CO-FOUNDER
                </h6>

                <h4 class="display-2 font-weight-light mb-3 black--text">
                  Alec Thompson
                </h4>

                <p class="font-weight-light grey--text">
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>

                <v-btn color="success" rounded class="mr-0">
                  Follow
                </v-btn>
              </v-card-text>
            </base-material-card>
          </v-col>
        </v-row>


      </v-container>
      </v-main>
    </v-app>
</template>

<script>
// import firebase from "firebase/app"
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  props:{
    headers:{},
		editedItem: {}
  },
  created(){
    console.log(this.editedItem);
    console.log(this.editedItem.Srid);
    console.log(this.editedItem2);
    console.log(this.editedItem2.Srid);
  },
  data(){
		return {
        editedItem2: [],
    };
  },
  
}
</script>

<style lang="scss" scoped>

</style>