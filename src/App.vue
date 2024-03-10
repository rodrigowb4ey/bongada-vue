<template>
  <div class="h-full">
    <AppHeader></AppHeader>
    <main class="h-full">
      <div class="h-full">
        <RouterView></RouterView>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>
