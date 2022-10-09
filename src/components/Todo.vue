<template>
  <div>
    <div>一共有：{{ todoStore.count }} 个Todo</div>
    <input type="text" v-model="todoStore.newItem" />
    <button @click="todoStore.addItem">add</button>
    <ul v-for="item in todoStore.items" :key="item.id">
      <li>
        {{ item.content }}
        <button @click="() => todoStore.delItem(item)">del</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/index";
const todoStore = useTodoStore();
</script>

<style scoped></style>
