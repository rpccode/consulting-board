import { defineStore } from "pinia"

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isOpen: true,
    selectedItem: "",
  }),
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
    setSelectedItem(item: string) {
      this.selectedItem = item
    },
  },
})

