<template>
  <div>
    <button v-on:click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from './utils/handler.js';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async loginUser1() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
        var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
