<template>
  <div>
    <v-app id="inspire">
    <v-container fluid class="main-content-container px-4">
      <!-- Page Header -->
      <!-- <v-row no-gutters class="page-header py-4">
        <v-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
          <h3 class="page-title">車両台帳</h3>
        </v-col>
      </v-row> -->

      <!-- Content -->
      <v-row>
        <v-col lg="4">
          <uplUserDetails />
        </v-col>
        <v-col lg="8">
          <uplUserAccountDetails />
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="12">
          <uplUserHistorys />
        </v-col>
      </v-row>
    </v-container>
    </v-app>
  </div>
</template>

<script>
import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';
import UserHistory from '@/components/user-profile-lite/UserHistory.vue';

export default {
  name: 'user-profile-lite',
  components: {
    uplUserDetails: UserDetails,
    uplUserAccountDetails: UserAccountDetails,
    uplUserHistorys: UserHistory,
  },
};
</script>

