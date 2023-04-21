<template>
  <nav class="flex bg-slate-950 text-white w-full justify-center">
    <div class="container w-full flex justify-between items-center py-4">
      <NuxtLink to="/">
        <img src="/img/logo-hardrack-blanco.png" alt="Logo" class="w-40" />
      </NuxtLink>

      <ul class="flex gap-4">
        <li>
          <NuxtLink
            to="/todo/new"
            class="flex items-center gap-2 transition-colors hover:text-green-700 duration-300"
          >
            <Icon name="mdi:gamepad-round" size="1.5rem" />
            Nueva Tarea
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
