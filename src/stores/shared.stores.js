import { create } from "zustand";

export const useSharedStores = create((set) => ({
  sidebarKey: ["sub1"],
  isCollapsedSideBar: false,
  handleCollapsed: (val) => set({ isCollapsedSideBar: val }),
  handleSidebarKey: (val) => set({ sidebarKey: val }),
}));
