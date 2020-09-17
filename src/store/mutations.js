export default {
    setHeaderTitle(state, routeName) {
        switch (routeName) {
            case 'day':
                state.headerTitle = "当天信息";
                break;
            case 'month':
                state.headerTitle = "当月信息";
                break;
            case 'year':
                state.headerTitle = "当年信息";
                break;
            default:
                break;
        }
    }
}