<template>
  <div>
      <ul>
          <li v-for="item in items">
              {{ item }}
          </li>
      </ul>
      <button v-on:click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>

</style>