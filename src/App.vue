<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header/>
    <Table/>
    <Modal/>
    <Loading/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Table from './components/Table.vue'
import Modal from './components/Modal.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Table,
    Modal,
    Loading
  }
}
</script>

<style>
body{
  padding:0%;
  margin:0%
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
