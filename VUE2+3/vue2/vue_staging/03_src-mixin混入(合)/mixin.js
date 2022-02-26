// 创建并暴露mixin对象
export const mixin = { // mixin是定义的对象名
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log("挂载了")
    }
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}