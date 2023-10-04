import personal from './modules/Entertrainment'

export default [
  ...personal,
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home.vue'),
  },
]
