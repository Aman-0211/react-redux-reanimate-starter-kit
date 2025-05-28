export interface ILoginPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other'; // extend if needed
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
      token: string | null;
      loading: boolean;
      error: string | null;
    }
