<template>
    <table v-if="users.length >= 1">
      <tr>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created at</th>
        <th>Actions</th>
      </tr>
      <tr 
      v-for="user in users"
      :key="user.id"
      >
        <td>
            <img class="avatar-img" :src="user.avatar">
        </td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.createdAt}}</td>
        <td class="actions-table-data">
            <button class="edit-button" @click="openModal">EDIT</button>
            <button class="delete-button">DELETE</button>
        </td>
      </tr>
    </table>
    <div class="ux-message" v-else> Use search bar to find users ...</div>
</template>

<script>
export default {
    name: 'Table',
    data(){
        return{
        }
    },
    methods:{
        openModal(){
            return this.$store.dispatch('openModal')
        }
    },
    computed:{
        users(){
            return this.$store.getters.getMatchingUsers
        }
    }
}
</script>

<style>

.avatar-img{
    height: 80px;
}

table{
    border-collapse: collapse;
    margin: 100px auto
}

th, tr, td{
    border:1px solid #999797
}

td, th{
    padding:10px 10px;
    max-width:200px;
    overflow:hidden
}

.actions-table-data button{
    display: block;
    justify-content: center;
    margin: 15px auto;
    width: 100%;
    height: 25px;
    border: 0px;
    cursor: pointer;
}

button:hover{
    transform: scale(1.05)
}

.edit-button{
    background-color: rgb(104, 74, 235);
    color: white
}

.delete-button{
    background-color: rgb(158, 8, 8);
    color: white
}

.ux-message{
    margin-top:100px;
    font-size:22px;
    color: rgba(20, 19, 19, 0.5)
}
</style>