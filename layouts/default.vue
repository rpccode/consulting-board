<template>
  <div class="flex flex-col min-h-screen bg-[#0B0F17] text-white antialiased">
    <!-- <SiteHeader /> -->

    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
      <SiteHeader />
        <div class="container mx-auto px-4 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
  
  