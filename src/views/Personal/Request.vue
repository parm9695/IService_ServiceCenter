<template>
  <v-container class="mx-2" fluid>
    <RequestSelection
      v-model="selection"
      v-if="['/personal/request'].includes($route.path)"
    />

    <div v-if="selection">
      <div>
        <v-row class="align-center">
          <v-col cols="12" md="3">
            <DatePicker
              label="วันที่ยื่นคำขอ"
              variant="outlined"
              v-model="date"
              density="compact"
            />
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-h6 text-app-color mb-6">
              <span>
                เลขที่คำขอ :
                <span class="font-weight-bold">1/2566</span>
              </span>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-tabs v-model="tab" grow>
        <v-tab value="1">ข้อมูลผู้ยื่นคำขอ</v-tab>
        <v-tab value="2">ข้อมูลที่อยู่</v-tab>
        <v-tab value="3">เอกสารประกอบ</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="1">
          {{ request.general }}
          <General v-model="request.general" />
        </v-window-item>
        <v-window-item value="2"> tab-2 </v-window-item>
        <v-window-item value="3"> tab-3 </v-window-item>
      </v-window>
    </div>
    <v-footer app color="white" class="pa-4">
      <v-spacer />
      <v-btn
        rounded
        color="secondary"
        size="large"
        prepend-icon="mdi-printer-outline"
        class="mx-1"
        @click="printDoc"
      >
        พิมพ์
      </v-btn>
      <v-btn
        rounded
        color="primary"
        size="large"
        prepend-icon="mdi-content-save-outline"
        class="mx-1"
      >
        บันทึก
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import constructor from '@/store/constructor'
import RequestSelection from '@/components/RequestSelection.vue'
import General from './General.vue'

import print from '@/prints/gun-personal'

export default {
  components: {
    RequestSelection,
    General,
  },

  data() {
    return {
      date: null,
      tab: null,
      request: {
        general: new constructor.personal.General(),
      },
      selection: null,
    }
  },

  methods: {
    printDoc() {
      const data = {
        pid: this.request.general.pid,
        firstName: this.request.general.firstName,
      }
      print.exportPdf(data)
    },
  },
}
</script>
