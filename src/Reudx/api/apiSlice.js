import { ApiBasdUrl } from "@/src/Utils/network";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: ApiBasdUrl}),
  tagTypes:['category'],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: ({category, user}) => `/pc-cart/${category}?user=${user}`,
      providesTags:['category']
    }),
    
  }),
});

export const { useGetCategoryQuery ,usePostProductMutation} = apiSlice;
