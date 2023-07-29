<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          color="blue-grey-14"
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-blue-grey-14">
          SIK UBL
        </q-toolbar-title>

        <div class="text-blue-grey-14">
          <q-btn flat dense round class="q-pa-sm" icon="person" style="font-size: 14px;">
            <q-menu>
              <q-list>
                <q-item>
                  <q-item-section side>
                    <q-icon name="logout"/>
                  </q-item-section>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-white"
    >
    <q-list class="q-pa-xs">
        <q-item class="justify-center text-center q-mb-md q-pt-md">
          <div>
            <q-avatar style="width: 100px;height: 100px" class="q-mb-md">
              <img src="~assets/img/LOGO-UBL.png" alt="">
            </q-avatar>
            <div class="text-weight-bold">SIK UBL</div>
            <div class="text-weight-bold">Hello, {{ $getProfile().username }}</div>
          </div>
        </q-item>

        <q-item clickable active-class="active" v-ripple :to="{name: 'dashboardDosen'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>

        <q-expansion-item
          icon="school"
          label="Tri Dharma"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'UploadTriDharma'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Upload Tri Dharma</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'LihatJumlahSKS '}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Lihat Jumlah SKS</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>

      <q-item clickable :to="{name: 'ArsipDosen'}" active-class="active">
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Arsip</q-item-label>
            </q-item-section>
      </q-item>

        <q-expansion-item
          icon="settings"
          label="About"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'TentangKamiDosen'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tentang Kami</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'ProfilDosen'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Profile</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
