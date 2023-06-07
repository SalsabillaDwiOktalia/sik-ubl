<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <q-item clickable :to="{name: 'dashboardKontrak'}">
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
          <q-item clickable :to="{name: 'dataDosenKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Dosen</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataKaryawanKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Karyawan admin</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataMagangalmKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Magang (Alumni)</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataMagangmhsKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Magang (Mahasiswa)</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataPerbantuanKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tenaga Perbantuan</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataObKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Office Boy</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataSatpamKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Satpam</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'dataSupirKontrak'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Supir</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable :to="{name: 'laporanPimpinan'}">
          <q-item-section avatar>
            <q-icon name="edit_document" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Input Kontrak Kerja</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable :to="{name: 'arsipPimpinan'}">
          <q-item-section avatar>
            <q-icon name="campaign" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Pemberitahuan</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable :to="{name: 'arsipPimpinan'}">
          <q-item-section avatar>
            <q-icon name="elderly" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Pensiunan</q-item-label>
            </q-item-section>
        </q-item>

        <q-expansion-item
          icon="settings"
          label="About"
          :content-inset-level="0"
        >
          <q-item clickable :to="{name: 'aboutPimpinan'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tentang Kami</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'aboutPimpinan'}">
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
