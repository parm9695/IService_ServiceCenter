<template>
    <v-container class="mx-2" fluid>
        <v-row class="mb-1">
            <v-col cols="12" md="6" lg="4">
                <v-autocomplete
                    v-model="select"
                    hide-details="auto"
                    variant="outlined"
                    label="--กรุณาเลือก--"
                    :items="items"
                />
            </v-col>
            <v-col cols="12" md="6" lg="4" offset-lg="4">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="ค้นหา"
                    hide-details="auto"
                    variant="outlined"
                />
            </v-col>
        </v-row>
    <v-data-table
        v-if="select == 'ตรวจสอบคำร้องจาก Internet'"
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="reqList"
        item-value="name"
        class="elevation-1"
        :search="search"
    >
    </v-data-table>

  <v-footer app color="white" class="pa-4">
    <v-spacer/>
    <v-btn
        color="blue-darken-2"
        size="large"
        rounded
        class="mx-1"
        prepend-icon="mdi-magnify"
    >แสดงรายละเอียด
    </v-btn>
    <v-btn
        color="grey-lighten-2"
        size="large"
        rounded
        class="mx-1"
        prepend-icon="mdi-email-outline"
    >ส่งเมลขอข้อมูลเพิ่ม
    </v-btn>
    <v-btn
        color="green"
        size="large"
        rounded
        class="mx-1"
        prepend-icon="mdi-check-bold"
    >จัดทำคำขอ
    </v-btn>
  </v-footer>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: ['ตรวจสอบคำร้องจาก Internet','ตรวจสอบคำร้องทั้งหมด'],
        select:'',
        search:'',
        itemsPerPage: 5,
        headers: [
          { title: 'ประเภทธุรกิจ', align: 'start', key: 'reqType',sortable: false,},
          { title: 'เลขที่', align: 'start', key: 'reqNo'},
          { title: 'เลขประจำตัวประชาขน', align: 'start', key: 'reqPid' ,sortable: false},
          { title: 'ผู้ขอดำเนินการ', align: 'start', key: 'reqName' ,sortable: false},
          { title: 'วันที่ทำรายการ', align: 'start', key: 'reqDate' },
          { title: 'สถานะรายการ', align: 'start', key: 'reqStatus' ,sortable: false},
        ],

        reqList: [
          {
            reqType: 'ขอใบอนุญาตตั้งสถานบริการ',
            reqNo: 99,
            reqPid: '1-9305-00194-19-0',
            reqName: 'เจษฎา หอมขาว',
            reqDate: '01/04/2564',
            reqStatus: 'รอตรวจสอบรายการ'
          },
          {
            reqType: 'ขอใบอนุญาตตั้งสถานบริการ',
            reqNo: 249,
            reqPid: '1-1008-00674-75-5',
            reqName: 'เจริญชัย สุวรรณศรี',
            reqDate: '30/06/2564',
            reqStatus: 'รอตรวจสอบรายการ'
          },
          {
            reqType: 'ขอใบอนุญาตตั้งสถานบริการ',
            reqNo: 271,
            reqPid: '3-1012-02766-19-0',
            reqName: 'บุษรา ทัพมงคล',
            reqDate: '12/07/2564',
            reqStatus: 'รอตรวจสอบรายการ'
          },
          {
            reqType: 'ขอใบอนุญาตตั้งสถานบริการ',
            reqNo: 276,
            reqPid: '9-9999-99999-99-9',
            reqName: 'ทดสอบ นามสกุล',
            reqDate: '12/07/2564',
            reqStatus: 'รอตรวจสอบรายการ'
          },
        ],
      }
    },
  }
</script>