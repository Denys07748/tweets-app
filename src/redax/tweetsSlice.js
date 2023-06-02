import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { fetchTweets } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    isLoading: false,
    isFollowing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      //   .addCase(addContact.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     state.items.unshift(action.payload);
      //   })
      //   .addCase(deleteContact.fulfilled, (state, action) => {
      //     state.isLoading = false;
      //     state.error = null;
      //     state.items = state.items.filter(({ id }) => id !== action.payload.id);
      //   })
      .addMatcher(
        isAnyOf(
          fetchTweets.pending
          //   addContact.pending,
          //   deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchTweets.rejected
          //   addContact.rejected,
          //   deleteContact.rejected
        ),
        handleRejected
      );
  },
});
const authPersistConfig = {
  key: 'tweets',
  storage,
};

export const tweetsReducer = persistReducer(
  authPersistConfig,
  tweetsSlice.reducer
);
