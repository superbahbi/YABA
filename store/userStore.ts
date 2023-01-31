import create from "zustand";
import { persist } from "zustand/middleware";
const initialState = {
  currentUser: undefined,
  isLoading: false,
  error: undefined,
};
export interface IUserStore {
  currentUser: string | undefined;
  isLoading: boolean;
  error: string | undefined;
  setCurrentUser: (user: string) => void;
  getCurrentUser: () => string | undefined;
  clear: () => void;
}
export const userStore = create(
  persist<IUserStore>((set, get) => ({
    ...initialState,
    setCurrentUser: (user: string) => {
      set({ currentUser: user });
    },
    getCurrentUser: () => get().currentUser,
    clear: () => {
      set(() => initialState);
      sessionStorage.clear(); // or localStorage.clear();
    },
  }))
);
