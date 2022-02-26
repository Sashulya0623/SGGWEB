<template>
    <div class="bfa">
        <span class="title">学生</span>
        <h2>名字: {{name}}</h2>
        <h2>性别: {{sex}}</h2>
        
    </div>  
</template>

<script>


export default {
    name: 'Student',
    data() {
        return {
            name: 'Tom',
            sex: '男'
        }
    },
    
    
}
</script>

<style scoped>
.bfa {
    background-color: #bfa;
}
</style>