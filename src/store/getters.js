export default {
    getModalState:state => state.modalState,
    getLoadingState:state => state.loadingState,
    getUsers:state => state.users,
    getMatchingUsers: state => state.matchingUsers,
    getUserToEdit: state => state.userEdit,
    getUserInput: state => state.userInput
}