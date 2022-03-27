import Mock from 'mockjs'

const users = [
    {
      id: 1,
      username: 'editor',
      password: 'normal',
      token: 'abcdefghijklmnopqrstuvwxyz',
      rights: [
        {
          id: 1,
          authName: '一级菜单',
          icon: 'icon-menu',
          children: [
          {
            id: 11,
            authName: '一级项目1',
            path: '/',
            rights: ['view', 'edit', 'add', 'delete']
          }, 
          {
            id: 11,
            authName: '一级项目2',
            path: '/',
            rights: ['view']
         }
          ]
        }
      ]
    },
    {
      id: 2,
      username: 'admin',
      password: 'admin',
      token: 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join(''),
      rights: [{
        id: 1,
        authName: '一级菜单',
        icon: 'icon-menu',
        children: [{
          id: 11,
          authName: '一级项目1',
          path: '/',
          rights: ['view', 'edit', 'add', 'delete']
        }, {
          id: 11,
          authName: '一级项目2',
          path: '/',
          rights: ['view', 'edit', 'add', 'delete']
        }]
      }, {
        id: 2,
        authName: '二级菜单',
        icon: 'icon-menu',
        children: [{
          id: 22,
          authName: '二级项目1',
          path: '/',
          rights: ['view', 'edit', 'add', 'delete']
        }]
      }]
    }
]

// 用户登录
Mock.mock('/login', 'post', options => {
    const { username, password } = JSON.parse(options.body)
    const user = users.find(item => {
      return item.username === username && item.password === password
    })
    return user
  })

