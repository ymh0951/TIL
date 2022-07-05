<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { fetchNews } from "@/api";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response);
    },
  },
  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
