<template>
  <p>Child toggle is {{ state.toggle }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "vue";
import { ChildState } from "../state";

export default defineComponent({
  props: {
    state: {
      type: Object as PropType<ChildState>,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => setTimeout(() => (props.state.toggle = true), 2000));
  },
});
</script>
