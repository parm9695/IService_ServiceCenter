import Request from '@/views/Entertrainment/Request.vue'
import CheckRequest from '@/components/CheckRequest.vue'
import TestRoute from '@/views/Entertrainment/EntertainmentComponents/TestRoute.vue'

export default [
  {
    path: '/',
    redirect: '/Service/Entertainment/checkRequest',
  },
  {
    path: '/Service/Entertainment/checkRequest',
    name: 'entertainmentCheckRequest',
    component: CheckRequest,
  },
  {
    path: '/Service/Entertainment/request',
    name: 'entertainmentRequest',
    component: Request,
  },
  {
    path: '/Service/Entertainment/testRoute',
    name: 'entertainmentTestRoute',
    component: TestRoute,
  },
]
