<template>
    <div class="flex flex-col min-h-screen bg-[#0B0F17] text-white antialiased">
      <!-- <SiteHeader /> -->
      <div class="flex flex-1">
        <Sidebar />
        <main>
            <slot />
        </main>
      </div>
    </div>
  </template>
  
  