import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginPayload, LoginResponse } from '@/modules/auth/types/auth.types';
// import { authActions } from '../../../app/store/auth.slice';
import { authActions } from '@/app/store/auth.slice';


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),

      // ✅ Side-effects belong here, not in components
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(authActions.setToken(data.token));
        } catch {
          // errors handled by RTK Query
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
