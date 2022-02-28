<template>
    <div class="footer">
        <!-- <input type="checkbox" name="" id="sum"  :checked="isAll" @change="checkAll"> -->
        <input type="checkbox" v-model="isAll"/>
        <label for="sum">已完成{{doneTotal}} / 全部{{total}}</label>
        <button @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['todos','checkAllTodo','clearAllDone'],
    computed: {
        // 总任务数
        total() {
            return this.todos.length
        },

        // 已完成的任务数
        doneTotal() {
            // reduce方法做条件统计
            // const count = this.todos.reduce((pre, cur) => {
            //     return pre + (cur.done ? 1 : 0)
            // }, 0) // 这里的0是设置的pre初始值

            // return count

            // 简写
            return this.todos.reduce((pre,cur) => pre + (cur.done ? 1 : 0), 0)
        },

        // 控制全选框是否被勾选
        isAll: {
            // 全选框是否被勾选
            get() {
                return this.total > 0 && this.total === this.doneTotal
            },

            // isAll状态更改时：v-model双向绑定时使用set
            set(value) {
                this.checkAllTodo(value)
            }
        }
    },
    methods: {
        // 全局按钮状态：change事件时使用
        // checkAll(e) {
        //     this.checkAllTodo(e.target.checked)
        // },

        // 清除所有已完成任务回调
        clearAll() {
            if(confirm('确定要清除已完成任务吗？')) {
                // 通知App清除已完成任务
                this.clearAllDone()
            }
        }
    }
}
</script>

<style scoped>
/* footer */
.footer {
    text-indent: 0.5em;
    height: 36px;
    line-height: 36px;
    position: relative;
}
.footer input {
    margin-right: 15px;
}
</style>