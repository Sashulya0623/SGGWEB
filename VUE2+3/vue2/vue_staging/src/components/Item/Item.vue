<template>
        <li>
            <input type="checkbox" name="" id="todo.id" :checked="todo.done">
            <label for="ip1">{{todo.tname}}</label>
            <button style="display: none">删除</button>
        </li>
</template>

<script>
export default {
    name: 'Item',
    data() {
        return {
            
        }
    },
    props: {
        todo: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
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
</style>