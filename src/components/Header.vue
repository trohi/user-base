<template>
    <div id="header">
      <h2 class="header-title">
        Users CRUD
      </h2>
      <form class="input-wrapper">
        <input class="header-input"/>
        <button type="submit" class="header-button" @submit.prevent="onSubmit">Search</button>
      </form>
    </div>
</template>

<script>

export default {
    name:'Header',
    onSubmit(){
        //preform search
    }
}

</script>

<style scoped>

#header{
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  background-color:#ffc1cd;
  justify-content: center;
  align-items: center;
}

.header-title{
  margin-top: 4%;
  color:#363636
}

.input-wrapper{
  display: inline-flex;
  margin-bottom: 4%;
}

.header-input{
  padding: 3% 10% 3% 10%;
  line-height: 20px;
  margin-left:-10%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 0px 
}
 
.header-button{
  background-color: #363636;
  color:white;
  padding: 2% 6% 2% 8%;
  margin-left: -1px;
  border: 0px solid;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

</style>