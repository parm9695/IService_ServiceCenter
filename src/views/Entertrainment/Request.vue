<template>
  <v-container class="mx-2" fluid>
    <RequestSelection
      v-model="selection"
      v-if="['/Service/Entertainment/request'].includes($route.path)"
    />

    <div v-if="selection">
      <div>
        <v-row class="align-center">
          <v-col cols="12" md="3">
            <DatePicker
              label="วันที่ยื่นคำขอ"
              variant="outlined"
              v-model="date"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-chip class="text-h6 mb-5" size="x-large" color="app-color">
              เลขที่คำขอ : 1/2566
            </v-chip>
          </v-col>
        </v-row>
      </div>

      <v-tabs v-model="tab" grow>
        <v-tab value="1">ข้อมูลผู้ยื่นคำขอ</v-tab>
        <v-tab value="2">รายละเอียดการยื่นคำขอ</v-tab>
        <v-tab value="3">รายการที่ขอเปลี่ยนแปลง</v-tab>
        <v-tab value="4">หลักฐานประกอบคำขอ</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="1">
          <!-- {{ request.dataReqInfo }} -->
          <ReqInfo v-model="request.dataReqInfo"/>
        </v-window-item>
        <v-window-item value="2">
          <!-- {{ dataDetails }} -->
           <!-- <ReqDetails v-model="dataDetails"/> -->
           <ReqDetails/>
        </v-window-item>
        <v-window-item value="3">
            <ReqChange/> 
        </v-window-item>
        <v-window-item value="4">
           <ReqDocument/>
        </v-window-item>
      </v-window>
    </div>
    <v-footer app color="white" class="pa-4">
      <v-spacer />
      <v-btn color="blue" size="large" @click="printDoc"> Print </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import constructor from '@/store/constructor'
import RequestSelection from '@/components/RequestSelection.vue'
import ReqInfo from './EntertainmentComponents/ReqInfo.vue'
import ReqDetails from './EntertainmentComponents/ReqDetails'
import ReqDocument from './EntertainmentComponents/ReqDocument'
import ReqChange from './EntertainmentComponents/ReqChange'
import print from '@/prints/gun-personal'

export default {
  components: {
    RequestSelection,
    ReqInfo,
    ReqDetails,
    ReqDocument,
    ReqChange,

  },

  data() {
    return {
      date: null,
      tab: null,
      request: {
        dataReqInfo: new constructor.personal.ReqInfo(),
      },
      selection: null,
      // dataDetails: {}

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
