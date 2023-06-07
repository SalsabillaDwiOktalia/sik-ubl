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

        <q-item clickable :to="{name: 'dashboardKepalaBiro'}">
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
          <q-item clickable :to="{name: 'TugasUntukKaryawan'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tugas Untuk Karyawan</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'TugasDariPimpinan'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tugas Dari Pimpinan</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'tugasTambahTugasKepalaBiro'}">
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
          <q-item clickable :to="{name: 'LaporanKaryawan'}">
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
          <q-item clickable :to="{name: 'ArsipKuKepalaBiro'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>ArsipKu</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'ArsipKaryawanKepalabiro'}">
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
          <q-item clickable :to="{name: 'TentangKamiKepalaBiro'}">
            <q-item-section avatar>
            </q-item-section>

              <q-item-section>
                <q-item-label>Tentang Kami</q-item-label>
              </q-item-section>
          </q-item>
          <q-item clickable :to="{name: 'ProfilKepalaBiro'}">
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
