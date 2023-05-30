import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  history: string[];
}

const initialState = {
  searchTerm: '',
  history: [],
} as SearchState;

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    pushTermToHistory(state, action: PayloadAction<string>) {
      state.history.push(action.payload);
    },
  },
});

export const { setSearchTerm, pushTermToHistory } = searchSlice.actions;

export default searchSlice.reducer;
