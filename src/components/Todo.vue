<template>
  <div>
    <div>一共有：{{ myCount }} 个Todo</div>
    <input type="text" v-model="todoStore.newItem" />
    <button @click="myAddItem">add</button>
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
import { storeToRefs } from "pinia";
const todoStore = useTodoStore();
const { count: myCount } = storeToRefs(todoStore);
const myAddItem = async () => {
  console.log("start");
  const res = await todoStore.addItem();
  console.log(res);
  console.log("end");
};
</script>

<style scoped></style>
