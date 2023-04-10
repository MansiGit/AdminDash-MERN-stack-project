//this is the API slice
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }), //=>base url will be attached to the query
    reducerPath: "adminApi", //===> name of the slice
    tagTypes: [
      "User",
      "Products",
      "Customers",
      "Transactions"],  //==> States with which you can identify the user
    endpoints: (build) => ({ //==> callback function , tha main logic for the API
        getUser: build.query({ //==>this will used to grab the user data
          query: (id) => `general/user/${id}`, //==> this is the route
          providesTags: ["User"], 
        }),
        getProducts: build.query({
          query: () => "client/products",
          providesTags: ["Products"],
        }),
        getCustomers: build.query({
          query: () => "client/customers",
          providesTags: ["Customers"],
        }),
        getTransactions: build.query({
          query: ({ page, pageSize, sort, search }) => ({
            url: "client/transactions",
            method: "GET",
            params: { page, pageSize, sort, search },
          }),
          providesTags: ["Transactions"],
        }),
        getGeography: build.query({
          query: () => "client/geography",
          providesTags: ["Geography"],
        }),
    }),

});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery} = api