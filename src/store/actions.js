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
    }

}