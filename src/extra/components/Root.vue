<template>
  <Branch v-if="displayableImageUrl" :dog-image-url="displayableImageUrl" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { populateCache } from "../cache";
import { getRandomImageUrl } from "../dog";
import Branch from "./Branch.vue";
import { useCache } from "./util";

export default defineComponent({
  components: {
    Branch,
  },
  setup() {
    const randomImageUrlCache = useCache<string>();
    populateCache(randomImageUrlCache, getRandomImageUrl());

    const displayableImageUrl = computed(() => {
      const { isLoading, data, error } = randomImageUrlCache.cache;
      try {
        if (data && !(isLoading || error)) {
          return new URL(data);
        }
      } catch (err) {
        console.log(err);
      }
      return null;
    });

    return { randomImageUrlCache, displayableImageUrl };
  },
});
</script>
