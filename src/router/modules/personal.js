import Request from '@/views/Personal/Request.vue'

export default [
  {
    path: '/',
    redirect: '/personal/request',
  },
  {
    path: '/personal/request',
    name: 'personalRequest',
    component: Request,
  },
  {
    path: '/personal/edit',
    name: 'personalEdit',
    component: Request,
  },
]
