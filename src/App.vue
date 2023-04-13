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
      page: 'home',
    };
  },
  methods: {
    
  },
};
</script>

<template>
  <main>
    <div v-if="loading"></div>
    <div class="main" v-else>
      <div class="main_menu">
        <ul class="menu_list">
          <li class="menu_list_item menu_list_item_active" v-if="page == 'home'">Home</li>
          <li class="menu_list_item" v-else @click="page = 'home'">Home</li>
          <li class="menu_list_item menu_list_item_active" v-if="page == 'senate'">Senate</li>
          <li class="menu_list_item" v-else @click="page = 'senate'">Senate</li>
        </ul>
      </div>
      <div class="main_display">
        <div class="home_page" v-if="page == 'home'">
          <div class="home_header">
            <div>Los Santos - Senate</div>
            <div class="home_header_buttons">
              <button>Exit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
