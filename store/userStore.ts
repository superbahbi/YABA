import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const initialState = {
  currentUser: undefined,
  isLoading: false,
  error: undefined,
};
export interface IUserStore {
  currentUser: string | undefined;
  isLoading: boolean;
  error: string | undefined;
  setCurrentUser: (by: string) => void
  getCurrentUser: () => string | undefined;
  clear: () => void;
}

export const userStore = create<IUserStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setCurrentUser: (by) => set((state) => ({ ...state, currentUser: by })),
        getCurrentUser: () => get().currentUser,
        clear: () => {
          sessionStorage.clear(); // or localStorage.clear();
        }
      }),
      {
        name: 'user-storage',
      }
    )
  )
)