const state = () => ({
    dialogFormActive: false,
});

const mutations = {
    setDialogActive(state, status) {
        state.dialogFormActive = status;
    }
};

const getters = {
    dialogFormActive: s => s.dialogFormActive,
};

export default {
    state,
    mutations,
    getters,
}
