<template>
  <div class="min-h-full bg-zinc-950">
    <AppHeader></AppHeader>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <RouterView></RouterView>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>
