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

        <q-item clickable active-class="active" v-ripple :to="{name: 'dashboardKepalaBiro'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>

        <q-expansion-item
          icon="library_books"
          label="Tugas"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'tugasUntukKaryawan'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tugas Untuk Karyawan</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'tugasDariPimpinan'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tugas Dari Pimpinan</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'tugasTambahTugasKepalaBiro'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tambah Tugas</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="edit_document"
          label="Logbook"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'laporanKaryawan'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Karyawan</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="folder"
          label="Arsip"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'arsipKuKepalaBiro'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>ArsipKu</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'arsipKaryawanKepalabiro'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Arsip Karyawan</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          icon="settings"
          label="About"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'tentangKamiKepalaBiro'}" active-class="active">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tentang Kami</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'profilKepalaBiro'}" active-class="active">
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
