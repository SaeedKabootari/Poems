import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const poemApi = createApi({
  reducerPath: "poemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://poetrydb.org/random/" }),

  endpoints: (builder) => ({
    getTwentyRandomPoems: builder.query({
      query() {
        return `20`;
      },
    }),
  }),
});

export const { useGetTwentyRandomPoemsQuery } = poemApi;
