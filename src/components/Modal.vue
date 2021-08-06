<template>
    <div id="modal" v-if="modalState">
        <button class="close-modal-button" @click="closeModal">X</button>
      <table>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>
              <img contenteditable="false" class="avatar-img" src="https://cdn.fakercloud.com/avatars/codysanfilippo_128.jpg">
          </td>
          <td contenteditable="true">Name</td>
          <td contenteditable="true">Email</td>
          <td contenteditable="true">createdAT</td>
          <td class="actions-table-data">
              <button class="save-button">SAVE</button>
              <button class="close-button" @click="closeModal">CLOSE</button>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    computed:{
        modalState(){
            return this.$store.getters.getModalState
        }
    },
    methods:{
        closeModal(){
            return this.$store.dispatch('closeModal')
        }
    }
}
</script>

<style scoped>

#modal{
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0, 0.8);    
}

table{
    background-color: #ffc1cd;
}

th, td{
    padding: 40px
}

.save-button{
    border: 0px;
    background-color: #0d5f21;
    color:white
}

.close-button{
    background-color: #dd1b42;  
    color:white
}

.close-modal-button{
    border-radius: 50%;
    border: 0px;
    position: fixed;
    top: 23%;
    left: 74%;
    color: #363636;
    background-color: white;
    font-weight: bold;
}

</style>