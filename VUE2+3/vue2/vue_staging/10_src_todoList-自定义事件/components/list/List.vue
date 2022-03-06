<template>
    <div class="list">
        <Item :todo="todo" v-for="todo in todos" :key="todo.id" :checkTodo='checkTodo' :deleteTodo='deleteTodo'/>
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
        checkTodo: {
            type: Function,
            required: true
        },
        deleteTodo: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
/* list */
.list {
    margin-bottom: 15px;
}
.list-none {
    border: 1px solid #DDDDDD;
}


</style>