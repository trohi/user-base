<template>
    <table v-if="users.length > 1">
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
            <button class="edit-button">EDIT</button>
            <button class="delete-button">DELETE</button>
        </td>
      </tr>
    </table>
    <div class="ux-message" v-else> Use search bar to find users ...</div>
</template>

<script>
export default {
    name:'Table',
    data(){
        return{
            users:[
              /*   {
                    createdAt: "2021-07-29T06:59:27.961Z",
                    name: "Robert Frami",
                    avatar: "https://cdn.fakercloud.com/avatars/codysanfilippo_128.jpg",
                    email: "Marshall.Turcotte53@hotmail.com",
                    id: "4"
                },
                {
                    createdAt: "2021-04-12T05:12:22-842Y",
                    name: "Jone Doe",
                    avatar: "https://cdn.fakercloud.com/avatars/codysanfilippo_128.jpg",
                    email: "Jon.Doe22@outlook.com",
                    id:"5"
                } */
            ]
        }
    }
}
</script>

<style scoped>
.avatar-img{
    height: 80px;
}

table{
    border-collapse: collapse;
    margin: 100px auto
}

th, tr, td{
    border:1px solid #363636
}

td, th{
    padding:10px 10px
}

button{
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