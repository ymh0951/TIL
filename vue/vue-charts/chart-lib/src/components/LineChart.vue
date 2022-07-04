<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
    mounted() {
        const ctx = this.$refs.lineChart.getContext('2d');
        const chart = new this.$_Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                }]
            },

            // Configuration options go here
            options: {}
        });
    }
}
</script>

<style>

</style>