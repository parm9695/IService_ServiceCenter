<template>
  <v-app>
    <Sidebar
      :header="header"
      :officer="officer"
      :items="items"
      color="app-color"
      :version="version"
      :date="date"
    />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>

    <ScrollTop />
  </v-app>
</template>

<script>
import ScrollTop from '@/components/ScrollTop.vue'
import Sidebar from '@/components/Sidebar.vue'
import menu from '@/helpers/sidebar-menu'

export default {
  components: {
    ScrollTop,
    Sidebar,
  },

  data() {
    return {
      header: {
        title: 'ระบบงานสถานบริการ',
        subTitle: '',
        place: 'สำนักทะเบียนทดสอบ',
      },
      officer: {
        name: 'นายทะเบียน ทดสอบ',
        position: 'ตำแหน่งนายทะเบียน',
      },
      items: [],
      version: process.env.VERSION || '0',
      date: '25661001',
    }
  },
  mounted() {
    // SET LIST MENU
    this.items = menu.Entertainment
  },

  methods: {},
}
</script>
