import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'X-RapidAPI-Key': 'a80741a64cmshdb76c10f99153bbp1c5354jsn1bd733e8afb1',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://moviesdatabase.p.rapidapi.com'
    }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/titles/search/title/${title}`,
                method: 'GET',
                headers,
            })
        })
    })
})

export const { useFetchMoviesQuery } = moviesApi

