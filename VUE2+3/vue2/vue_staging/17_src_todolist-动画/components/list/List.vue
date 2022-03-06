<template>
    <div class="list">
        <!-- <Item :todo="todo" v-for="todo in todos" :key="todo.id" :checkTodo='checkTodo' :deleteTodo='deleteTodo'/> -->
        <transition-group name="todo" appear>
            <Item :todo="todo" v-for="todo in todos" :key="todo.id"/>
        </transition-group>
    </div>
</template>

<script>
import Item from '../Item/Item.vue'

export default {
    name: 'List',
    components: {
        Item
    },
    props: {
        todos: {
            type: Array,
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
    }
}
</script>

<style scoped>
/* list */
.list {
    margin-bottom: 15px;
}
/* .list-none {
    border: 1px solid #DDDDDD;
} */


/*定义动画 */
@keyframes add-sub {
    0% {
        transform: translateX(100%)
    }

    100% {
        transform: translateX(0)
    }
}

/*使用 */
.todo-enter-active {
    animation: add-sub .5s linear;
}

.todo-leave-active {
    animation: add-sub .5s linear reverse;
}

</style>