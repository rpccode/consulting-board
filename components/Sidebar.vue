<template>
    <div
      :class="[
        'bg-[#151823] min-h-screen flex flex-col transition-all duration-500 ease-in-out relative overflow-hidden',
        isOpen ? 'w-64' : 'w-16'
      ]"
    >
      <div class="p-4">
        <div class="flex items-center gap-2 mb-6">
          <!-- <svg class="h-8 w-8 text-[#2DD4BF]" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 
              12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 
              12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z"
            />
          </svg> -->
        <img src="/Logo.png" alt="Logo" class="h-8 w-8" />
        <h1 v-show="isOpen" class="text-xl font-bold text-white">Tablero de Prioridades</h1>
          
        </div>
  
        <template v-if="isOpen">
          <div class="relative mb-4">
            <Search class="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search Task..."
              class="w-full bg-[#0B0F17] rounded-md pl-8 pr-4 py-2 text-sm
               text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1
                focus:ring-[#2DD4BF]"
            />
          </div>
  
          <div class="flex items-center gap-2 p-2 mb-4 bg-[#232734] rounded-md">
            <div class="h-6 w-6 bg-[#6366F1] rounded flex items-center justify-center text-white text-sm font-medium">
              R
            </div>
            <span class="text-gray-300 text-sm">rpccode's team</span>
          </div>
        </template>
  
        <nav class="space-y-1">
          <button
          @click="toggleSidebar"
              :class="[
                'flex items-center gap-3 w-full px-2 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#232734] transition-all duration-300 ease-in-out',
                !isOpen && 'justify-center'
              ]"
              
            >
            <component :is="isOpen ? PanelLeftClose : PanelLeftOpen" :size="16" />

          
          </button>

          <div v-for="item in menuItems" :key="item.label" class="relative">
            <button
              @click="handleItemClick(item)"
              :class="[
                'flex items-center gap-3 w-full px-2 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#232734] transition-all duration-300 ease-in-out',
                !isOpen && 'justify-center',
                selectedItem === item.label && 'bg-[#2DD4BF] text-white font-medium'
              ]"
              :title="item.label"
            >
              <component :is="item.icon" class="h-4 w-4" />
              <template v-if="isOpen">
                <span class="text-sm flex-grow text-left">{{ item.label }}</span>
                <ChevronDown
                  v-if="item.submenu"
                  :class="[
                    'h-4 w-4 transition-transform duration-200',
                    openSubmenu === item.label && 'transform rotate-180'
                  ]"
                />
              </template>
            </button>
            <div
              v-if="item.submenu"
              :class="[
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'ml-6' : 'absolute left-full top-0 ml-2',
                openSubmenu === item.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              ]"
              :style="{
                width: isOpen ? 'auto' : '200px',
                background: !isOpen ? '#151823' : 'transparent',
                borderRadius: !isOpen ? '0.375rem' : '0',
                boxShadow: !isOpen
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  : 'none'
              }"
            >
              <router-link
                v-for="subItem in item.submenu"
                :key="subItem.label"
                :to="subItem.href"
                class="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#232734] transition-colors"
              >
                {{ subItem.label }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
  
      <div :class="['mt-auto p-4', !isOpen && 'flex flex-col items-center']">
        <template v-if="isOpen">
           <button
             
              :class="[
                'flex items-center gap-3 w-full px-2 py-2 mb-2 text-gray-400 hover:text-white rounded-md hover:bg-[#232734] transition-all duration-300 ease-in-out',
                !isOpen && 'justify-center',
                'bg-[#cc2323] text-white font-medium text-center'
              ]"
              title="Cerrar Seccion"
            >
              <component :is="LogOutIcon" class="h-4 w-4" />
              Cerrar Seccion
            </button>
          <div class="flex items-center gap-2 mt-4">
            <div class="h-8 w-8 rounded-full bg-gray-600" />
            <span class="text-gray-400 text-sm">rpccode@gmail.com</span>
          </div>
        </template>
        <template v-else>
          <button
             
              :class="[
                'flex items-center gap-3 w-full px-2 py-2 mb-2 text-gray-400 hover:text-white rounded-md hover:bg-[#232734] transition-all duration-300 ease-in-out',
                !isOpen && 'justify-center',
                'bg-[#cc2323] text-white font-medium'
              ]"
              title="Cerrar Seccion"
            >
              <component :is="LogOutIcon" class="h-4 w-4" />
            </button>
          <div class="h-8 w-8 mt-2 rounded-full bg-gray-600" />
        </template>
      </div>
  
      <!-- <button
        @click="toggleSidebar"
        class="absolute top-6 right-2 bg-[#232734] text-white p-1 
        rounded-full transition-all duration-300 ease-in-out hover:bg-[#2A303F]"
      >
        <component :is="isOpen ? PanelLeftClose : PanelLeftOpen" :size="16" />
      </button> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useSidebarStore } from '../stores/sidebar'
  import { Search, Box, Hammer, Puzzle, Globe, Users, FileText,
     Shield, CreditCard, Settings, Palette, ChevronLeft,
      ChevronRight, ChevronDown,PanelLeftClose,PanelLeftOpen,
      LogOutIcon
    
    } from 'lucide-vue-next'
  
  const sidebarStore = useSidebarStore()
  const isOpen = computed(() => sidebarStore.isOpen)
  const selectedItem = computed(() => sidebarStore.selectedItem)
  
  const openSubmenu = ref<string | null>(null)
  
  const menuItems = [
    { label: "Sites", icon: Box },
    {
      label: "Builds",
      icon: Hammer,
      submenu: [
        { label: "All builds", href: "/builds" },
        { label: "Build settings", href: "/builds/settings" },
        { label: "Environment variables", href: "/builds/env" },
      ],
    },
    { label: "Extensions", icon: Puzzle },
    { label: "Domains", icon: Globe },
    { label: "Members", icon: Users },
    { label: "Audit log", icon: FileText },
    { label: "Security Scorecard", icon: Shield },
    { label: "Billing", icon: CreditCard },
    {
      label: "Team settings",
      icon: Settings,
      submenu: [
        { label: "General", href: "/team/general" },
        { label: "Members", href: "/team/members" },
        { label: "Billing", href: "/team/billing" },
      ],
    },
    { label: "Visual editor dashboard", icon: Palette },
  ]
  
  const toggleSidebar = () => {
    sidebarStore.toggleSidebar()
  }
  
  const handleItemClick = (item: any) => {
    sidebarStore.setSelectedItem(item.label)
    if (item.submenu) {
      if (openSubmenu.value === item.label) {
        openSubmenu.value = null
      } else {
        openSubmenu.value = item.label
      }
    }
  }
  </script>
  
  