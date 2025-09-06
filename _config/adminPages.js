export default {
  options: {
    permission: 'ishoe.options.manage',
    activated: true,
    authenticated: true,
    path: '/shoe/options/index',
    name: 'qshoe.admin.options',
    crud : import('modules/qshoe/_crud/options'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ishoe.cms.sidebar.adminOptions',
    icon: 'fa-light fa-ballot-check',
    subHeader: {
      refresh: true,
    }
  },
  shoes: {
    permission: 'ishoe.shoes.manage',
    activated: true,
    authenticated: true,
    path: '/shoe/shoes/index',
    name: 'qshoe.admin.shoes',
    crud : import('modules/qshoe/_crud/shoes'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ishoe.cms.sidebar.adminShoes',
    icon: 'fa-light fa-boot',
    subHeader: {
      refresh: true,
    }
  }
}
