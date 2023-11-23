import { create } from "zustand";

export const useHomeStores = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
