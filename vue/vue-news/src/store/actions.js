import { 
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from '../api/index.js';

export default {
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        };
    },

    async FETCH_ASK(context) {
        try {
            const response = await fetchAskList();
            context.commit('SET_ASK', response.data);
            return response;
        } catch (error) {
            console.log(error);
        };
    },

    async FETCH_JOBS(context) {
        try {
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        };
    },

    FETCH_USER(context, name) {
        return fetchUserInfo(name)
        .then(Response => {
            context.commit('SET_USER', Response.data);
            return Response;
        })
        .catch(error => {
            console.log(error);
        });
    },

    FETCH_ITEM(context, id) {
        return fetchCommentItem(id)
        .then(Response => {
            context.commit('SET_ITEM', Response.data);
            return Response;
        })
        .catch(error => {
            console.log(error);
        })
    },

    FETCH_LIST(context, pageName) {
        return fetchList(pageName)
        .then(Response => {
            context.commit('SET_LIST', Response.data);
            return Response;
        })
        .catch(error => {
            console.log(error);
        })
    }
}