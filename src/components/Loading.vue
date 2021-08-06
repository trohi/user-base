<template >
    <div class="loaderWrapper" v-if="loading">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name:'Loading',
    computed:{
        loading(){
            return this.$store.getters.getLoadingState
        }
    }
}
</script>

<style scoped>
.loaderWrapper{
    display: block;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0, 0.8); 
}

.loader{
    margin: 300px auto;
    border: 14px solid #f3f3f3;
    border-top: 14px solid #3498db;
    height: 60px;
    border-radius: 50%;
    width: 60px;
    animation: spin 2s linear infinite;
}

@keyframes spin{
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
}
</style>