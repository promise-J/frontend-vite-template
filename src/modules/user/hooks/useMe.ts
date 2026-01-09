import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../types/user.types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include', // if you use cookies/JWT
  }),
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => '/users/me',
    }),
  }),
});

export const { useGetMeQuery } = userApi;
