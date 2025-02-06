<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
        <Slot/>
        <Toaster/>
    </div>
</template>

<style scoped>
.text-red-500 {
  color: #f87171;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
}
</style>