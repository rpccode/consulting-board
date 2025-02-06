<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      variantClasses[variant],
      sizeClasses[size]
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'secondary' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
}>(), {
  variant: 'default',
  size: 'default',
  disabled: false
})

const variantClasses = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
  outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground'
}

const sizeClasses = {
  default: 'h-9 px-4 py-2',
  sm: 'h-8 rounded-md px-3 text-xs',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9'
}
</script>

