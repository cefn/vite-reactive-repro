import { reactive } from "vue";
import { initialiseCacheContainer } from "../cache";

export function useCache<T>(initialData?: T) {
  return reactive(initialiseCacheContainer(initialData));
}
