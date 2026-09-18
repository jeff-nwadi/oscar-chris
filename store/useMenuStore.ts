import { create } from 'zustand'

interface MenuState {
  isOpen: boolean
  toggleMenu: () => void
  openMenu: () => void
  closeMenu: () => void
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}))
