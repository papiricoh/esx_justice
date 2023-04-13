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
              ['Roberts Party', 39, '#CC0099', 'New day'],
              ['Socialist Party', 89, '#E4FF27', 'SOL'],
              ['Center Party', 234, '#052060', 'KILO'],
              ['Conservatives', 130, '#FF5523', 'CON'],
              ['Fascist Party', 89, '#000000', 'FAL'],
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
