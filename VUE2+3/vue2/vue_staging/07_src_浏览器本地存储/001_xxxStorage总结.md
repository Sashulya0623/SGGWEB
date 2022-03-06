# 浏览器本地存储localStorage和sessionStorage

## 适用于搜索历史

1. 存储的内容大小一般支持5mb左右(不同浏览器有所差别)
2. 浏览器通过Window.xxxStorage属性实现本地存储
3. 相关API
   1) xxxStorage.setItem('key', 'value')
        把数据添加到本地存储中，参数为键值对，若键名存在，更新其对应值
   2) xxxStorage.getItem('key')
        从存储中读取数据，参数为键名，返回的是键名对应值
   3) xxxStorage.removeItem('key')
        从存储在删除数据，参数为键名，把该键名删除
   4) xxx.Storage.clear()
        清空存储中的所有数据

4. 二者区别
    1) sessionStorage存储的内容会随着浏览器的关闭而消失
    2) localStorage存储的内容，需要手动清除才会消失
    3) xxxStorage.getItem('key')，若key对应的value无法获取，返回的值为null
    4) JSON.parse(null)的结果依然是null

5. 控制台查看
   application选项卡