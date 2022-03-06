<template>
    <li>
        <label>
            <input type="checkbox" name=""  :checked="todo.done" @change='handleCheck(todo.id)'>
            <!-- 当isEdit为true，显示编辑框，false显示任务名称 -->
            <span v-show="!todo.isEdit">{{todo.tname}}</span>
            <input  ref="editIpt" v-show="todo.isEdit" type="text" :value="todo.tname" @blur="handleBlur(todo, $event)">
        </label>
        <button v-show="!todo.isEdit" class="btn editBtn" @click="handleEdit(todo)">编辑</button>
        <button  class="btn" @click='handleDelete(todo.id)'>删除</button>
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
            
        },

        // 编辑任务名称
        handleEdit(todo) {
            // 当编辑按钮被点击时，此时处于编辑状态
            // 判断：对象中是否含有isEdit属性
            /*
            Object.prototype.hasOwnProperty()
                hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）
            */
            if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
                // 如果有
                todo.isEdit = true
            } else {
                // 如果没有，添加该属性
                this.$set(todo,'isEdit',true)
                console.log(todo);
            }

            // 编辑按钮被点击后立即获取焦点
            this.$nextTick(function() {
                // 若不使用nextTick代码执行顺序有问题，this.$refs.editIpt.focus()无效
                this.$refs.editIpt.focus()
            })
            
        },

        // 失去焦点的回调
        handleBlur(todo, e) {
            // 失去焦点时，编辑状态为false
            todo.isEdit = false

            // 触发更新任务名称
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
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

/*编辑按钮 */
li .editBtn {
    right: 80px;
    background-color: rgb(63, 208, 252);
}

.editBtn:hover {
    background-color: rgb(6, 160, 207);
}

</style>