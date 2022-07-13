<template>
  <Ancestor>
    <Parent />
  </Ancestor>
</template>

<script>
import Ancestor from "./components/Ancestor.vue";
import Parent from "./components/Parent.vue";
export default {
  name: "App",
  components: {
    Ancestor,
    Parent,
  },
};
</script>
