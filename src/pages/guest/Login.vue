<template>
  <q-layout class="bg-grey-1" view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row items-center">
                <div class="col-md-6 col-sm-12 col-xs-12">
                  <q-img src="~assets/img/login.png"></q-img>
                </div>
                <div class="col-md-6 col-xs-12 q-pa-lg">
                  <q-card-section class="text-blue-grey-14">
                    <div class="text-h4 text-bold">SIK UBL</div>
                    <div class="text-h6 text-bold text-primary">Login Akun Anda</div>
                  </q-card-section>
                  <q-card-section>
                    <q-form @submit="onSubmit">
                      <q-input v-model="username" label="Username"
                        :rules="[
                          val => val !== null && val !== '' || 'Mohon Isi'
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="fas fa-user" />
                        </template>
                      </q-input>
                      <q-input v-on:keyup.enter="onSubmit" type="password" v-model="password" label="Password"
                        :rules="[
                          val => val !== null && val !== '' || 'Mohon Isi'
                        ]"
                      >
                        <template v-slot:prepend>
                          <q-icon name="fas fa-unlock" />
                        </template>
                      </q-input>
                      <q-btn class="full-width q-mt-md" clas="q-mb-lg" type="submit" unelevated color="primary" label="Login" />
                    </q-form>
                  </q-card-section>
                  <!-- <q-card-section>
                    <div class="row q-col-gutter-xs">
                      <div class="col-md-12 col-xs-12 col-sm-12">

                      </div>
                    </div>
                  </q-card-section> -->
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
/* eslint-disable */
import {LocalStorage} from 'quasar'
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$showLoading()
      this.$axios.post('users/login', {
        username: this.username,
        password: this.password
      })
        .finally(() => this.$hide())
        .then(res => {
          if (this.$parseResponse(res.data, true)) {
            const data = res.data.data
            if (data.level === 0) {
              this.$setProfile(data)
              LocalStorage.set('user', data)
              this.$router.push({
                name: 'dashboardAdmin'
              })
            } else if (data.level === 1) {
              this.$setProfile(data)
              LocalStorage.set('user', data)
              this.$router.push({
                name: 'indexKaryawan'
              })
            } else {
              alert('Role Tidak Terdaftar')
            }
          }
        }).catch(() => {
          this.$commonError()
        })
    }
  }
}
</script>
