<template>
    <div id="student">
        <h2>{{year}}</h2>
        <h2>{{msg}}</h2>
    </div>  
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            year: 2022,
            msg: '新年快乐，万事胜意'
        }
    }
}
</script>