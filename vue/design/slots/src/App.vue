<template>
  <div id="app">
    <ul>
      <item>
        아이템1
      </item>
      <item>
        아이템2 <button>click me</button>
      </item>
      <item>
        아이템3
        <img src="./assets/logo.png" alt="로고" width="50px" height="50px">
      </item>
      <item>
        <div style="color: blue; font-size: 20px">아이템4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5']
    }
  }
}
</script>

<style>

</style>
