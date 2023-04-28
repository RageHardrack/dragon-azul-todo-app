<script setup lang="ts">
const { data, pending, refresh } = await useLazyFetch("/api/get-todos");

const handleDeleteItem = async (id: string) => {
  await $fetch(`/api/delete-todo/${id}`, {
    method: "DELETE",
  });

  refresh();
};

const handleToggleItem = async (id: string, completed: boolean) => {
  const { OK } = await $fetch(`/api/edit-todo/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed: !completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (OK) refresh();
};
</script>

<template>
  <div v-if="!data && pending">loading...</div>
  <ul v-else class="border rounded border-white w-1/2">
    <li
      class="flex justify-between items-center rounded px-6 py-4"
      v-if="data?.todos.length === 0"
    >
      No hay tareas pendientes...
    </li>
    <TodoItem
      v-else
      v-for="todo in data!.todos"
      :todo="todo"
      :key="todo.id"
      @deleteItem="handleDeleteItem"
      @toggleItem="handleToggleItem"
    />
  </ul>
</template>
