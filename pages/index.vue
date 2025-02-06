<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <Card>
    <CardHeader>
      <h1>Nuxt Routing set up successfully!</h1>

    </CardHeader>

   <CardContent>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">
      Learn more about Nuxt Routing</a>
   </CardContent>
  </Card>
</template>
