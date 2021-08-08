<template>
    <div id="modal" v-if="modalState">
        <form class="editForm" @submit.stop.prevent>
            <h3>Edit user: {{User.name}}</h3>
            <hr>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name"  @keydown.enter.prevent>
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email"  @keydown.enter.prevent>
            <label for="createdAt">Created at</label>
            <input type="text" id="createdAt" disabled :value="User.createdAt">
            <label for="avatar">Avatar</label>
            <input type="text" id="avatar" v-model="editedAvatar" placeholder="paste image's URL"  @keydown.enter.prevent>
            <p class="ui-hint">paste image URL</p>
            <div v-if="editedAvatar">
                <img :src="editedAvatar">
            </div>
            <div v-else>
                <img :src="User.avatar">
            </div>
            
            <hr>
            <div class="editButtonsWrapper">
                <button class="editDismiss" @click="closeModal">DISMISS</button> 
                <button class="editSave" @click="saveChanges">SAVE</button>
            </div>
        </form>
    
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return{
            editedAvatar: '',
            createdAt: '',
            name: '',
            email: ''
        }
    },
    computed:{
        modalState(){
            return this.$store.getters.getModalState
        },
        User(){
            //this computed propery has to functions
            //1# populate data property with store's data
            //2# returning user that is to be edited
            //populating data with store data
            this.editedAvatar = this.$store.getters.getUserToEdit.avatar
            this.createdAt = this.$store.getters.getUserToEdit.createdAt
            this.name = this.$store.getters.getUserToEdit.name
            this.email = this.$store.getters.getUserToEdit.email
            //returning specified user for further edit
            return this.$store.getters.getUserToEdit
        }
    },
    methods:{
        closeModal(){
            return this.$store.dispatch('closeModal')
        },
        saveChanges(){
                this.$store.dispatch('updateUser',{
                createdAt: this.createdAt,
                name: this.name,
                avatar: this.editedAvatar,
                email: this.email,
                id: this.User.id
            })
            this.closeModal()
        }
    }
}
</script>

<style scoped>

#modal{
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 2vh;
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

.ui-hint{
    font-size: 12px;
    margin-top: 0px;
    color:green
}

.editForm label{
    margin-right:auto;
    margin-left:auto;
    margin-bottom: 0px;
    margin-top: 12px
}

img{
    width:100px
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