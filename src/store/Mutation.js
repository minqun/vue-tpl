export default {
    increment(state) {
        state.count += 1
    },
    requireData(state, data) {
        state.queryData = data;
    }
}