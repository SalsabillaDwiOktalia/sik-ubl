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

        <q-item clickable active-class="active" v-ripple :to="{name: 'dashboardKontrak'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>

        <q-expansion-item
          icon="library_books"
          label="Data Kontrak Karyawan"
          :content-inset-level="0"
        >
        <q-item clickable :to="{name: 'dataKontrakKaryawan'}" active-class="active">
          <q-item-section avatar>
            <!-- <q-icon name="edit_document" /> -->
          </q-item-section>

            <q-item-section>
              <q-item-label>Data Karyawan</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable :to="{name: 'dataKontrak'}" active-class="active">
          <q-item-section avatar>
            <!-- <q-icon name="edit_document" /> -->
          </q-item-section>

            <q-item-section>
              <q-item-label>Data Kontrak</q-item-label>
            </q-item-section>
        </q-item>
        </q-expansion-item>

        <!-- <q-item clickable :to="{name: 'laporanPimpinan'}" active-class="active">
          <q-item-section avatar>
            <q-icon name="edit_document" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Input Kontrak Kerja</q-item-label>
            </q-item-section>
        </q-item> -->

        <q-item clickable :to="{name: 'arsipPimpinan'}" active-class="active">
          <q-item-section avatar>
            <q-icon name="campaign" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Pemberitahuan</q-item-label>
            </q-item-section>
        </q-item>

        <q-expansion-item
          icon="settings"
          label="About"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'aboutPimpinan'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tentang Kami</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'aboutPimpinan'}" active-class="active">
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
