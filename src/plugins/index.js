import vuetify from './vuetify'
import router from '../router'
import './pdfmake-style.js'
import DatePicker from '@cdglib/vue3-datepicker'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const options = {
  confirmButtonColor: '#3F51B5',
  cancelButtonColor: '#EEEEEE',
  confirmButtonText: 'ตกลง',
  cancelButtonText: 'ยกเลิก',
}

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(VueSweetalert2, options).use(DatePicker)
}
