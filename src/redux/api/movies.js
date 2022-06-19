import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'X-RapidAPI-Key': '808b2bfe0cmshf1ddf98813a6c3cp15d125jsn5b0b21510e01',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://movie-database-alternative.p.rapidapi.com'
    }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/?s=${title}`,
                method: 'GET',
                headers,
            })
        })
    })
})

export const { useFetchMoviesQuery } = moviesApi

