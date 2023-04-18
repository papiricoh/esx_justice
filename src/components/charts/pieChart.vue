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
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Passed Bills',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
          name: 'Laws',
          colorByPoint: true,
          data: [{
            name: 'Constitution',
            y: 1.67,
          }, {
            name: 'Anmenments',
            y: 14.77
          },
          ]
        }]
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
