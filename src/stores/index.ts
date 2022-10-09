import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export type Item = {
  id: number;
  content: string;
};

export const useTodoStore = defineStore("user", () => {
  const newItem = ref("");
  const items = reactive<Item[]>([]);
  const count = computed(() => items.length);
  let idx = 0;

  const addItem = () => {
    if (newItem.value) {
      items.push({
        id: ++idx,
        content: newItem.value,
      });
      newItem.value = "";
    }
  };

  const delItem = (item: Item) => {
    const index = items.indexOf(item);
    items.splice(index, 1);
  };

  return {
    newItem,
    items,
    count,
    addItem,
    delItem,
  };
});
