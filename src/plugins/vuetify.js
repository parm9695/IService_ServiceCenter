import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { VDataTable } from "vuetify/labs/VDataTable";
import colors from 'vuetify/lib/util/colors'
import * as Facade from 'vue-input-facade'

export default createVuetify({
  directives: {
    mask: Facade.facade,
  },
  components: {
    VDatePicker,
    VDataTable,
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  VBtn: {
    style: 'text-transform: none;',
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.blue.darken2,
          secondary: colors.grey.darken3,
          'app-color': process.env.APP_COLOR,
        },
      },
    },
  },
})
