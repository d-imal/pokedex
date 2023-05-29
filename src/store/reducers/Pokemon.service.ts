import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PokeAPI } from 'pokeapi-types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokeAPI.Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getAll: builder.query<PokeAPI.NamedAPIResourceList, undefined>({
      query: () => `pokemon/?limit=3000`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;