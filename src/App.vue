<template>
  <my-header>{{ headerTitle }}</my-header>
  <router-view />
  <tab></tab>
</template>

<script>
import MyHeader from "./components/index";
import Tab from "./components/tab/index";

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    MyHeader,
    Tab,
  },

  setup() {
    const store = useStore();
    const state = store.state;
    const router = useRouter();
    router.push("/");
    return computed(() => state).value;
  },
};
</script>
