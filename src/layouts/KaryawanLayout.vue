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

        <q-item clickable :to="{name: 'dashboardKaryawan'}">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable :to="{name: 'dataKaryawanAdmin'}">
          <q-item-section avatar>
            <q-icon name="switch_account" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Data Karyawan</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable :to="{name: 'dataKontrakAdmin'}">
          <q-item-section avatar>
            <q-icon name="badge" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Data Kontrak Karyawan</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable :to="{name: 'dataDosenAdmin'}">
          <q-item-section avatar>
            <q-icon name="groups" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Data Dosen</q-item-label>
            </q-item-section>
      </q-item>
      <q-item clickable :to="{name: 'datakabagAdmin'}">
          <q-item-section avatar>
            <q-icon name="group" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Data Kabag</q-item-label>
            </q-item-section>
      </q-item>
      <q-item clickable :to="{name: 'dataPimpinanAdmin'}">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

            <q-item-section>
              <q-item-label>Pimpinan Unit</q-item-label>
            </q-item-section>
      </q-item>
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
