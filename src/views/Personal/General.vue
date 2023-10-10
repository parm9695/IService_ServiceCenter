<template>
  <HeaderVue color="app-color" header="ข้อมูลใบอนุญาต ม.น.3" />
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.pid"
        label="เลขประจำตัวประชาชน"
        placeholder="เลขประจำตัวประชาชน"
        variant="outlined"
        v-mask="'#-####-#####-##-#'"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <v-text-field
        v-model="value.firstName"
        label="ชื่อ"
        placeholder="ชื่อ"
        variant="outlined"
        hide-details="auto"
        persistent-placeholder
        density="compact"
      />
    </v-col>
  </v-row>
</template>

<script>
import { reactive } from 'vue'
import HeaderVue from '@/components/Header.vue'
export default {
  name: 'Personal-Request-General',

  components: {
    HeaderVue,
  },

  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          pid: '',
          firstName: '',
        }
      },
    },
    readonly: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const value = reactive(props.modelValue)
    return {
      value,
    }
  },
}
</script>
