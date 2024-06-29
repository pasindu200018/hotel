import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const BASE_URL = "http://16.170.245.118/api";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
