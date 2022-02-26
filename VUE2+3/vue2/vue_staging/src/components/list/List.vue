<template>
    <ul class="list">
        <Item v-for="todo of todos" :key="todo.id" :todo="todo" />
    </ul>
    
</template>

<script>
import Item from '../Item/Item'
export default {
    name: 'List',
    components: {
        Item
    },
    data() {
        return {
          
        }
    },
    props:{
       todos: {
            type: Array,
            required: true,
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