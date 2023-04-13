<script setup>
import parliamentChart from './components/parliamentChart.vue';
import pieChart from './components/pieChart.vue';
</script>

<script>
export default {
  props: {

  },
  data() {
    return {
      loading: false,
      page: 'home',
      player: { id: "steam:21382918", first_name: "John", last_name: "Doe"},
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
        <h1 style="text-align: center;">LSS</h1>
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
          <div class="home_body">
            <h2>Senate Overview</h2>
            <div class="chart_container">
              <pieChart :imported_data="[{name: 'Constitution',y: 1.67,}, {name: 'Anmenments',y: 14.77}, {name: 'Bills',y: 124.77}, {name: 'Regional Decrees',y: 56.77},]"></pieChart>
              <parliamentChart :imported_data="
                [['Roberts Party', 39, '#CC0099', 'New day'], ['Socialist Party', 89, '#E4FF27', 'SOL'],  ['Center Party', 234, '#052060', 'KILO'], ['Conservatives', 130, '#FF5523', 'CON'], ['Fascist Party', 89, '#000000', 'FAL'],]">
              </parliamentChart>
            </div>
            <br>
            <h2>Supreme Court Overview</h2>
            
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
