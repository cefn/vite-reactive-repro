// inspired by, modelled on React-Query
// e.g. see https://dev.to/otamnitram/react-query-a-practical-example-167j

// union below shows cache states in approximate time order
type Cache<T> = Readonly<
  | {
      // no value has ever been pending, cache is empty
      isLoading: false;
      data?: never;
      error?: never;
    }
  | {
      // value is pending
      isLoading: true;
      data?: T; //previous, stale value (if available)
      error?: never; // no error, data is pending
    }
  | {
      // no value is pending, last pending value was a success
      isLoading: false;
      data: T;
      error?: never;
    }
  | {
      // no value is pending, last pending value was a failure
      isLoading: false;
      data?: T; //previous, stale value (if available)
      error: unknown; // an error WAS thrown, use type guards to identify and handle it
    }
>;

// An outer container that can be monitored in a 'reactive' framework e.g. using Vue, Pinia, MobX, Lauf
export interface CacheContainer<T> {
  cache: Cache<T>;
}

/** Correctly initialise a cache container. */
export function initialiseCacheContainer<T>(
  initialData?: T
): CacheContainer<T> {
  return initialData
    ? {
        cache: {
          isLoading: false,
          data: initialData,
        },
      }
    : {
        cache: {
          isLoading: false,
        },
      };
}

/** Updates a CacheContainer<T> to track the loading of a Promise<T>. The mutation
 * of container properties will trigger reactive logic, hence updating components
 * bound to the container state.*/
export async function populateCache<T>(
  container: CacheContainer<T>,
  valuePromise: Promise<T>
): Promise<void> {
  // inspect state
  const {
    cache: { isLoading, data },
  } = container;
  // error if load is pending
  if (isLoading) {
    throw new Error("Load already in progress");
  }
  // notify loading
  // populate stale if available
  if (data) {
    container.cache = {
      isLoading: true,
      data,
    };
  } else {
    container.cache = {
      isLoading: true,
    };
  }
  // complete the load
  try {
    const value = await valuePromise;
    // unset loading flag, populate value
    container.cache = {
      isLoading: false,
      data: value,
    };
  } catch (error) {
    // unset loading flag
    const { data } = container.cache;
    if (data) {
      container.cache = {
        isLoading: false,
        data,
        error,
      };
    } else {
      container.cache = {
        isLoading: false,
        error,
      };
    }
  }
}
