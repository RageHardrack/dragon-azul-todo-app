<script setup lang="ts">
useHead({ title: "Dragón Azul Tareas App" });
</script>

<template>
  <div
    class="min-h-screen bg-slate-900 flex flex-col items-center justify-between"
  >
    <TheNavbar />

    <main class="text-white flex-1 container py-8">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
