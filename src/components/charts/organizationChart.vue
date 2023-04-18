<script setup>
import {Chart} from 'highcharts-vue';
</script>

<script>
export default {
  props: {
    imported_data: Array,
    imported_nodes: Array,
  },
  data() {
    return {
      chartOptions: {    
        chart: {
          height: 600,
          inverted: true
        },

        title: {
            text: 'Senate organization'
        },

        accessibility: {
          point: {
            descriptionFormatter: function (point) {
              var nodeName = point.toNode.name,
                nodeId = point.toNode.id,
                nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
                parentDesc = point.fromNode.id;
              return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
            }
          }
        },

        series: [{
          type: 'organization',
          name: 'Highsoft',
          keys: ['from', 'to'],
          data: [
            ['Speaker', 'Mayority party'],
            ['Mayority party', 'Mayority Leader'],
            ['Mayority Leader', 'Mayority whip'],
            ['Mayority whip', 'Mayority Caucus coordinator'],
            ['Mayority whip', 'Mayority whip assistant'],
            ['Speaker', 'Minority party'],
            ['Minority party', 'Minority Leader'],
            ['Minority Leader', 'Minority whip'],
            ['Minority whip', 'Minority Caucus coordinator'],
            ['Minority whip', 'Minority whip assistant'],
          ],
          levels: [{
              level: 0,
              color: 'silver',
              dataLabels: {
                color: 'black'
              },
              height: 25
            }, 
            {
              level: 1,
              color: 'lightblue',
              dataLabels: {
                color: 'black'
              },
              height: 25
            }, 
            {
              level: 2,
              color: '#980104'
            }, 
            {
              level: 4,
              color: '#359154'
            }],
            nodes: [{
                id: 'Speaker',
            }, {
                id: 'Mayority Leader',
                title: 'Mayority Leader',
                name: 'John Doe',
            }, {
                id: 'Mayority whip',
                title: 'Mayority whip',
                name: 'John Doe',
            },  {
                id: 'Mayority party',
                title: 'Mayority party',
                name: 'GNH',
            }, {
                id: 'Mayority Caucus coordinator',
                title: 'Caucus coordinator',
                name: 'John Doe',
            }, {
                id: 'Mayority whip assistant',
                title: 'Whip assistant',
                name: 'John Doe',
            },{
                id: 'Minority Leader',
                title: 'Minority Leader',
                name: 'John Doe',
            }, {
                id: 'Minority whip',
                title: 'Minority whip',
                name: 'John Doe',
            },  {
                id: 'Minority party',
                title: 'Minority party',
                name: 'GNJD',
            }, {
                id: 'Minority Caucus coordinator',
                title: 'Caucus coordinator',
                name: 'John Doe',
            }, {
                id: 'Minority whip assistant',
                title: 'Whip assistant',
                name: 'John Doe',
            },
          ],
          colorByPoint: false,
          color: '#007ad0',
          dataLabels: {
              color: 'white'
          },
          borderColor: 'white',
          nodeWidth: 65
        }],
        tooltip: {
          outside: true
        },
        exporting: {
          allowHTML: true,
          sourceWidth: 800,
          sourceHeight: 600
        }
      }
    };
  },
  mounted() {
    this.chartOptions.series[0].nodes = this.imported_nodes;
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
