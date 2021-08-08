<template>
  <div id="app">
    <Header/>
    <Table/>
    <Modal/>
    <Loading/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Table from './components/Table.vue'
import Modal from './components/Modal.vue'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    // all components used in this app
    // are registered and listed here
    Header,
    Table,
    Modal,
    Loading
  },
  mounted(){
      this.$store.dispatch('fetchUsers')
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
