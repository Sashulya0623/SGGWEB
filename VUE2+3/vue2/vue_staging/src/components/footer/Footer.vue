<template>
    <div class="footer">
        <input type="checkbox" name="" id="sum">
        <label for="sum">已完成1 / 全部3</label>
        <button>清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'Footer',

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