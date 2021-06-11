
import Layout from '/@/layout/index.vue'
export default [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('/@/views/dashboard/dashboard.vue'),
				meta: {
					title: '首页',
					icon: 'MenuOutlined',
					roles: ['admin', 'guest']
				}
			},
			{
				path: 'hooks',
				name: 'hooks',
				component: () => import('/@/views/hooks/hooks.vue'),
				meta: {
					title: 'hooks',
					icon: 'BarChartOutlined',
					roles: ['admin', 'guest']
				}
			}
		]
	},
	{
		// https://next.router.vuejs.org/guide/migration/index.html#removed-star-or-catch-all-routes
		path: '/:path(.*)*',
		name: 'NotFound',
		hidden: true,
		component: () => import('../views/error/404.vue')
	}
]
