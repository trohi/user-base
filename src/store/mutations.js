export default {
    setModalState(state, payload){
        state.modalState = payload
    },

    setLoadingState(state, payload){
        state.loadingState = payload
    },

    loadUsers(state, payload){
        state.users = payload
    },

    setMatchingUsers(state, payload){
        state.matchingUsers = payload
    }
}