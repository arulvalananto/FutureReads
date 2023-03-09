export interface AuthState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  isLoggedIn: boolean;
}
