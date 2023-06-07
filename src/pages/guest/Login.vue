<template>
  <q-layout>
    <q-page-container class="bg-grey-2">
      <q-page>
        <q-card class="my-card">
          <q-card-section>
            login
            <q-form @submit="onSubmit">
              <q-input
                v-model="username"
                label="Masukan Username anda"
                :rules="[
                  val => val !== null && val !== '' || 'Mohon Isi Username'
                ]"
              />
              <q-input
                v-model="password"
                label="Masukan Password anda"
                type="password"
                :rules="[
                  val => val !== null && val !== '' || 'Mohon Isi Password'
                ]"
              />
              <q-btn color="primary" label="Login" type="submit" />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (this.$parseResponse(res.data, true)) {
          const data = res.data.data
          if (data.level === 0) {
            this.$setProfile(data)
            this.$router.push({
              name: 'dashboardAdmin'
            })
          } else if (data.level === 1) {
            this.$setProfile(data)
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
