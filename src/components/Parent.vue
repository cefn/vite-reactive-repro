<template>
  <p>Parent toggle is {{ childState.toggle }}</p>
  <Child :state="childState" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { ChildState } from "../state";
import Child from "./Child.vue";

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const childState = reactive<ChildState>({
      toggle: false,
    });
    return {
      childState,
    };
  },
});
</script>
