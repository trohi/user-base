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
    },

    setUserToEdit(state, payload){
        state.userEdit = payload
    },

    updateUserInformation(state, payload){
      // updating state's "users" data 
      const targetedUsersIndex = state.users.findIndex((user => user.id === payload.id))
      state.users[targetedUsersIndex] = payload
      //console.log(state.users[targetedUsersIndex])
      //console.log(state.userInput)
      const matchingUsersArray = []
        state.users.forEach(user=>{
            if(user.name.toLowerCase().indexOf(state.userInput) > -1){
                matchingUsersArray.push(user)
            }
            state.matchingUsers = matchingUsersArray
        })
    },
    
    filterUsers(state, payload){
        // finding specific users that matches
        // users's input value
        const matchingUsers = []
        state.users.forEach(user=>{
            if(user.name.toLowerCase().indexOf(payload) > -1){
                //console.log(user.name)
                matchingUsers.push(user)
            }
            state.matchingUsers = matchingUsers
        })
    },

    saveInput(state, payload){
        // saving user's input to store
        state.userInput = payload
    },

    deleteUser(state, payload){
        // deleting chosen user from state
        state.users.forEach(user=>{
            if(user.id === payload.id){
                const index = state.users.indexOf(user)
                state.users.splice(index, 1)
            }
        })
    }
}