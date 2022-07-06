// 1. Make sure to import 'vue' defore declaring augmented types
import Vue from "vue";
import Chart = require("chart.js");

type ChartLib = typeof Chart;

// 2. Specify a file width the types you want to augment
// Vue has the constuructor type in types/vue.d.ts
declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface Vue {
    $_Chart: ChartLib;
  }
}
