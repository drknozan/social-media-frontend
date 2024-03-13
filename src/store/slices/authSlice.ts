import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '@src/types/User';
import axios, { AxiosError } from 'axios';

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: { message: string } | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData: { username: string; email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/register',
        {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        },
        { withCredentials: true },
      );

      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);
export const login = createAsyncThunk('auth/login', async (userData: { email: string; password: string }, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/login',
      {
        email: userData.email,
        password: userData.password,
      },
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:3000/user', { withCredentials: true });

    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

export const logout = createAsyncThunk<void>('auth/logout', async () => {
  await axios.post('http://localhost:3000/logout', null, { withCredentials: true });
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as { message: string };
      })
      .addCase(login.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as { message: string };
      })
      .addCase(getCurrentUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
