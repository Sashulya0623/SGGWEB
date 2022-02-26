<template>
    <div id="student">
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