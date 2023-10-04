<template>
  <v-row class="align-center">
    <v-col cols="12" md="4">
      <v-autocomplete
        label="ประเภทใบคำขอ"
        variant="outlined"
        v-model="selectedOne"
        :items="[
          'ขอต่ออายุใบอนุญาต',
          'ขอเปลี่ยนชื่อสถานบริการ',
          'ขอต่อเติมสถานบริการ',
          'ขอเปลี่ยนบุคคล ซึ่งเป็นผู้ดำเนินกิจการแทนนิติบุคคลผู้รับอนุญาต',
          'ขอออกใบอนุญาตตั้งสถานบริการ กรณีผู้รับอนุญาตถึงแก่ความตาย',
          'ขอเลิกกิจการสถานบริการ',
          'ขอใบแทนใบอนุญาต',
        ]"
      >
      </v-autocomplete>
    </v-col>
    <!-- <v-col cols="12" md="4">
      <v-autocomplete
        label="ประเภทย่อย"
        variant="outlined"
        v-model="selectedTwo"
        :items="[
          'ขอซื้ออาวุธปืนใหม่',
          'ขอซื้อกระสุนปืน',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      >
      </v-autocomplete>
    </v-col> -->
    <v-col cols="12" md="4">
      <v-btn
        color="primary"
        rounded
        variant="outlined"
        class="mb-5"
        size="large"
        @click="clickOk"
      >
        ตกลง
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { Boolean } from 'pdfmake/build/pdfmake'
export default {
  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      panel: 0,
      selectedOne: null,
      selectedTwo: null,
    }
  },
  methods: {
    clickOk() {
      this.panel = null
      this.$emit('update:modelValue', true)
    },
  },
}
</script>

<style></style>
