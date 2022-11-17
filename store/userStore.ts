import create from "zustand";
import { persist } from 'zustand/middleware';
const initialState = {
    currentUser: undefined,
    isLoading: false,
    error: undefined,
};
export const userStore = create(
    persist<any>(
        (set, get) => ({
            ...initialState,
            setUser: (user: any) => {
                set({ currentUser: user.id });
            },
            logout: () => { set({ currentUser: undefined }); },
            getUser: () => get().currentUser,
            clear: () => {
                set(() => (initialState));
                sessionStorage.clear(); // or localStorage.clear();
            },
        })
    )
);