import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT'}),
    endpoints: builder=>({
        getPosts: builder.query({
            query: ()=> "/posts"
        }),
    })
})

export const { useGetPostsQuery } = postsApi;
