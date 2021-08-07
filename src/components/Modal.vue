<template>
    <div id="modal" v-if="modalState">
      <!-- <table>
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
      </table> -->
    
        <form class="editForm">
            <h3>User edit form</h3>
            <hr>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="previous name">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="previous name">
            <label for="createdAt">Created at</label>
            <input type="text" id="createdAt" disabled placeholder="date">
            <label for="avatar">Avatar</label>
            <input type="text" id="avatar" placeholder="paste image's URL">
            <img src="">
            <hr>
            <div class="editButtonsWrapper">
                <button class="editDismiss">DISMISS</button>
                <button class="editSave">SAVE</button>
            </div>
        </form>
    
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


.editForm{
    display: flex;
    flex-direction: column;
    width:40%;
    margin: 4vh auto;
    background:#ffc1cd;
    padding: 20px 20px;
    border-radius: 50px;
    max-height: 600px;
}

hr{
    width:100%
}

.editForm input{
    width:60%;
    margin: 10px auto;
    height:24px;
    line-height: 24px
}

.editForm input:focus{
    transform:scale(1.1)
}

.editForm label{
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 0px;
    margin-top: 12px
}

.editButtonsWrapper{
    margin-left:auto;
    padding:10px 0px
}

.editButtonsWrapper button{
    padding:10px;
    margin-left:10px;
    border:0px;
    color: white;
    border-radius: 5px;
}

.editDismiss{
    background-color:red
}

.editSave{
    background-color:green
}
</style>