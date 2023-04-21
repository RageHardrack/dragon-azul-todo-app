<script setup lang="ts">
import { ITodo } from "~~/interfaces";

const router = useRouter();

const todo = reactive<ITodo>({
  title: "",
  completed: false,
});

const handleSubmit = async () => {
  const { message, OK } = await $fetch("/api/create-todo", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (OK) return router.push("/");

  alert(message);
};
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-10">
    <h1 class="text-4xl font-bold">Crear nueva Tarea</h1>

    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col items-center justify-center gap-10 border rounded border-white w-1/4 p-8"
    >
      <label class="flex flex-col gap-2 w-full">
        Tarea
        <input
          type="text"
          v-model="todo.title"
          class="bg-transparent border rounded border-white text-white px-4 py-2"
          autofocus
        />
      </label>

      <button
        type="submit"
        class="bg-white text-slate-500 px-6 rounded py-2 transition-opacity hover:opacity-75 duration-300"
      >
        Crear
      </button>
    </form>
  </section>
</template>
