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
            console.log(res.data)
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

    filterUsers({commit}, payload){
        commit('setLoadingState', true)
        commit('setMatchingUsers', payload)
        commit('setLoadingState', false)
    }



}