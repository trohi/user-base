import axios from 'axios'

export default {

    closeModal({commit}){
        commit('setModalState', false)
    },

    openModal({commit}){
        commit('setModalState', true)
    },

    closeLoading({commit}){
        commit('setLoadingState', false)
    },

    openLoading({commit}){
        commit('setLoadingState', true)
    },

    fetchUsers({commit}){
        //set loading to true, while request is sent and
        //response has been returned
        commit('setLoadingState', true)
        axios.get('https://6103057679ed680017482413.mockapi.io/users')
        .then(res => {
            //calling mutation that is responsible for
            //storing data into store
            commit('loadUsers', res.data)
            //seting loading back to false
            commit('setLoadingState', false)
        })
        .catch(error => {
            console.log(error)
            commit('setLoadingState', false)
        })
    },

    passUserToEdit({commit}, payload){
        commit('setUserToEdit', payload)
    },

    updateUser({commit}, payload){
        // updating user using put operation
        const parsedID = parseInt(payload.id)
        commit('setLoadingState', true)
        axios.put(`https://6103057679ed680017482413.mockapi.io/users/${parsedID}`,
        {
            createdAt: payload.createdAt,
            name: payload.name,
            avatar: payload.avatar,
            email: payload.email,
            id: payload.id
        })
        .then(res => {
            // updating same user in state's "user" data
            commit('updateUserInformation', payload)
            commit('setLoadingState', false)
            console.log("user succefuly updated!")
        })
        .catch(error => {
            console.log(error.message)
            commit('setLoadingState', false)
        })
    },

    filterUsers({commit}, payload){
        commit('setLoadingState', true)
        commit('filterUsers', payload)
        commit('saveInput', payload)
        commit('setLoadingState', false)
    },

    deleteUser({commit, getters}, payload){
        commit('setLoadingState', true)
        // deleting user from API using delete operation
        axios.delete(`https://6103057679ed680017482413.mockapi.io/users/${payload.id}`)
        .then(res =>{
            console.log(res)
            commit('deleteUser', payload)
            // calling mutation that will preform
            // filtering operation, and update table
            // after deleting user from API
            commit('filterUsers', getters.getUserInput)
            commit('setLoadingState', false)
        })
        .catch(error =>{
            console.log(error.message)
            commit('setLoadingState', false)
        })
    }

}