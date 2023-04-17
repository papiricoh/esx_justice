<script setup>
import parliamentChart from './components/parliamentChart.vue';
import pieChart from './components/pieChart.vue';
import senatePage from './components/senatePage.vue';
import partiesPage from './components/partiesPage.vue';
</script>

<script>
export default {
  props: {

  },
  data() {
    return {
      loading: false,
      page: 'home',
      player: { id: "steam:21382918", first_name: "John", last_name: "Doe", isSenator: true, party: "GNL" },
      parties: [
        { name: "Gran National League", label: "GNL", color: "#789FC1", members: [
          { id: "steam:21382918", name: "Roger Walters", role: "Leader"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21743918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21743918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21743918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21743918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21743918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21382418", name: "Roger Walters", role: "Senator"},
          { id: "steam:213632918", name: "Roger Walters", role: "Senator"},
          { id: "steam:21743918", name: "Roger Walters", role: "Senator"},
        ]},
      ],
    };
  },
  methods: {
    toPartyChartData() {
      let imported_data = [];
      for (let index = 0; index < this.parties.length; index++) {
        imported_data[imported_data.length] = [this.parties[index].name, Number(this.parties[index].members.length), this.parties[index].color, this.parties[index].label];
      }
      return imported_data;
    },
    getPlayerParty() {
      for (let index = 0; index < this.parties.length; index++) {
        if(this.parties[index].label == this.player.party) {
          return this.parties[index];
        }
      }
      return null;
    }
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
          <li class="menu_list_item menu_list_item_active" v-if="page == 'parties'">Parties</li>
          <li class="menu_list_item" v-else @click="page = 'parties'">Parties</li>
        </ul>
      </div>
      <div class="main_display">
        <div class="home_page" v-if="page == 'home'">
          <div class="home_header">
            <div>Los Santos - Senate</div>
            <div class="home_header_buttons">
              <div>Wellcome: {{ player.first_name }} {{ player.last_name }}</div>
              <button>Exit</button>
            </div>
          </div>
          <div class="home_body">
            <h2>Senate Overview</h2>
            <div class="chart_container">
              <parliamentChart :imported_data="toPartyChartData()"></parliamentChart>
              <pieChart :imported_data="[{name: 'Constitution',y: 1.67,}, {name: 'Anmenments',y: 14.77}, {name: 'Bills',y: 124.77}, {name: 'Regional Decrees',y: 56.77},]"></pieChart>
            </div>
            <br>
            <h2>Supreme Court Overview</h2>
            
          </div>
        </div>
        <senatePage v-if="page == 'senate'" class="senate_page" :player="player" :parties="parties"></senatePage>
        <partiesPage v-if="page == 'parties'" class="parties_page" :player="player" :party="getPlayerParty()"></partiesPage>
      </div>
    </div>
  </main>
</template>
