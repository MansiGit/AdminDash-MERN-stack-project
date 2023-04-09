//this is the API slice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }), //=>base url will be attached to the query
    reducerPath: "adminApi", //===> name of the slice
    tagTypes: [
      "User",
      "Products"],  //==> States with which you can identify the user
    endpoints: (build) => ({ //==> callback function , tha main logic for the API
        getUser: build.query({ //==>this will used to grab the user data
          query: (id) => `general/user/${id}`, //==> this is the route
          providesTags: ["User"], 
        }),
        getProducts: build.query({
          query: () => "client/products",
          providesTags: ["Products"],
        }),
    }),

});

export const {
    useGetUserQuery,
    useGetProductsQuery} = api