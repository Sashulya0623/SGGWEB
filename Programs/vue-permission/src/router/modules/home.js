const templateRouter = [
    {
        path: '',
        redirect: 'home'
    },
    {
        path: 'home',
        name: 'home',
        component: ()=> import ('../../pages/index/Home'),
        children: [
            {
                path: 'one',
                name: 'one',
                component: ()=> import('../../pages/home/Homeone')
            }
        ]
    },
]

export default templateRouter