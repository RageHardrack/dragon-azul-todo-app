<script setup lang="ts">
import { ITodo } from "~/interfaces";

interface Props {
  todo: ITodo;
}

const router = useRouter();

const { todo } = defineProps<Props>();
const emit = defineEmits(["deleteItem", "toggleItem"]);

const deleteItem = (id: string) => emit("deleteItem", id);
const toggleItem = (id: string, completed: boolean) =>
  emit("toggleItem", id, completed);
</script>

<template>
  <li
    class="flex justify-between items-center rounded hover:bg-slate-600 transition-colors duration-300 cursor-default"
    :class="{ 'line-through': todo.completed }"
  >
    <div
      class="rounded px-6 py-4 w-full"
      @click.prevent="toggleItem(todo.id!, todo.completed)"
    >
      {{ todo.title }}
    </div>
    <div class="flex gap-4 items-center rounded px-6 py-4">
      <button @click="router.push(`/todo/${todo.id!}`)">
        <Icon name="mdi:application-edit" size="2rem" class="text-blue-600" />
      </button>
      <button @click="deleteItem(todo.id!)">
        <Icon name="mdi:delete" size="2rem" class="text-red-600" />
      </button>
    </div>
  </li>
</template>
