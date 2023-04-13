<script setup>
import parliamentChart from './components/parliamentChart.vue';
</script>

<script>
export default {
  props: {

  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    
  },
};
</script>

<template>
  <main>
    <div v-if="loading"></div>
    <div v-else>
      <parliamentChart></parliamentChart>
    </div>
  </main>
</template>
