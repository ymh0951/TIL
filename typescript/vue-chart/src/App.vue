<template>
  <div>
    <canvas id="myChart" ref="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ChartConfiguration } from "chart.js";
import Chart from "chart.js/auto";
import { VueConstructor } from "vue/types/umd";
import { MyVueRefs } from './types/index';

// export default (
//   Vue as VueConstructor<Vue & { $refs: { myChart: HTMLCanvasElement } }>
// ).extend({
export default (
  (Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
  methods: {
    sayHi() {
      const canvaseElement = this.$refs.myChart;
    },
  },
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borederColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    const config: ChartConfiguration = {
      type: "line",
      data,
      options: {},
    };
    // const canvaseElement = document.getElementById(
    //   "myChart"
    // ) as HTMLCanvasElement;
    const canvaseElement = this.$refs.myChart as HTMLCanvasElement;
    const ctx = canvaseElement.getContext("2d");
    if (!ctx) {
      return;
    }
    var myChart = new Chart(ctx, config);
  },
});
</script>

<style scoped></style>
