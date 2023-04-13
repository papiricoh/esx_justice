<script setup>
import {Chart} from 'highcharts-vue';
</script>

<script>
export default {
  props: {

  },
  data() {
    return {
      chartOptions: {    
        chart: {
          type: 'item'
        },
        series: [{
          name: 'Representatives',
          keys: ['name', 'y', 'color', 'label'],
          data: [
              ['The Left', 39, '#CC0099', 'DIE LINKE'],
              ['Social Democratic Party', 206, '#EE0011', 'SPD'],
              ['Alliance 90/The Greens', 118, '#448833', 'GRÜNE'],
              ['Free Democratic Party', 92, '#FFCC00', 'FDP'],
              ['Christian Democratic Union', 152, '#000000', 'CDU'],
              ['Christian Social Union in Bavaria', 45, '#3366CC', 'CSU'],
              ['Alternative for Germany', 83, '#3399FF', 'AfD'],
              ['South Schleswig Voters\' Association', 1, '#000099', 'SSW']
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
