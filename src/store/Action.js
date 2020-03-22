export default {
    increment(context) {
        context.commit('increment');
    },
    requireData(context, data) {
        context.commit('requireData', data)
    }
}