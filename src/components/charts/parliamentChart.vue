<script setup>
import {Chart} from 'highcharts-vue';
</script>

<script>
export default {
  props: {
    imported_data: Array,
  },
  data() {
    return {
      chartOptions: {    
        chart: {
          type: 'item'
        },
        title: "",
        series: [{
          name: 'Representatives',
          keys: ['name', 'y', 'color', 'label'],
          data: [
          ],
          dataLabels: {
              enabled: true,
              format: '{point.label}',
              style: {
                  textOutline: '3px contrast'
              }
          },

          // Circular options
          center: ['50%', '88%'],
          size: '170%',
          startAngle: -100,
          endAngle: 100
      }],
      }
    };
  },
  mounted() {
    this.chartOptions.series[0].data = this.imported_data;
  },
  methods: {
    
  },
  components: {
    highcharts: Chart 
  }
};
</script>

<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>
