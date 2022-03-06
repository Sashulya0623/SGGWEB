<template>
    <li>
        <label>
            <input type="checkbox" name=""  :checked="todo.done" @change='handleCheck(todo.id)'>
            <span>{{todo.tname}}</span>
        </label>
        <button class="btn" @click='handleDelete(todo.id)'>删除</button>
    </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
        todo: {
            type: Object,
            required: true
        },
        // checkTodo: {
        //     type: Function,
        //     required: true
        // },
        // deleteTodo: {
        //     type: Function,
        //     required: true
        // }
    },
    methods: {
        // 复选框的勾选回调事件
        handleCheck(id) {
            // 通知App给对应id任务状态取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo', id)
        },

        // 删除任务
        handleDelete(id) {
            // 确认是否删除
            if(confirm('确定要删除吗？')) {
                // 通知App删除对应id任务对象
                // this.deleteTodo(id)
                this.$bus.$emit('deleteTodo', id)
            }
            
        }
    }
}
</script>

<style lang="less" scoped>

li {
    list-style: none;
    width: 576px;
    height: 36px;
    line-height: 36px;
    text-indent: 0.5em;
    font-size: 18px;
    border: 1px solid #DDDDDD;
    border-bottom: 0;
    position: relative;
}
li:last-child {
    border-bottom: 1px #ddd solid
}
li input {
    margin-right: 5px;
}

.btn {
    /* 我一开始把display写在内联样式中，结果鼠标移入显示按钮无效
    大概是内联样式优先级过高
    */
    display: none;
}

li:hover {
    background-color: rgb(212, 205, 205);
    button {
        display: block;
    }
}

</style>