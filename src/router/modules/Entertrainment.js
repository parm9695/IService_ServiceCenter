import Request from '@/views/Entertrainment/Request.vue'

export default [
  {
    path: '/',
    redirect: '/Service/Entertainment/request',
  },
  {
    path: '/Service/Entertainment/request',
    name: 'entertainmentRequest',
    component: Request,
  },
]
