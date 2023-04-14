<script setup>
import parliamentChart from './components/parliamentChart.vue';
import pieChart from './components/pieChart.vue';
import senatePage from './components/senatePage.vue';
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
      parties: [
        { name: "Socialist Union of Los Santos", label: "SUOLS", color: "#FF9001", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
        ]},
        { name: "Sandy United Front", label: "SUF", color: "#CC0099", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
        ]},
        { name: "Gran National League", label: "GNL", color: "#789FC1", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
        ]},
        { name: "Los Santos Great Coalition", label: "LSGC", color: "#080099", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Wale Killian", role: "Senator"},
          { name: "John William", role: "Senator"},
          { name: "Kate John", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Wale Killian", role: "Senator"},
          { name: "John William", role: "Senator"},
          { name: "Kate John", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Wale Killian", role: "Senator"},
          { name: "John William", role: "Senator"},
          { name: "Kate John", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Wale Killian", role: "Senator"},
          { name: "John William", role: "Senator"},
          { name: "Kate John", role: "Senator"},
        ]},
        { name: "Los Santos radical union", label: "LSRU", color: "#888888", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
        ]},
        { name: "Make San Andreas great again", label: "MSAGE", color: "#FF0000", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Kate John", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Wale Killian", role: "Senator"},
          { name: "John William", role: "Senator"},
          { name: "Kate John", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Wale Killian", role: "Senator"},
          { name: "John William", role: "Senator"},
          { name: "Kate John", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
        ]},
        { name: "Paleto great union", label: "PGU", color: "#046e08", members: [
          { name: "Roger Walters", role: "Leader"},
          { name: "Jonny Walters", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
          { name: "George Russel", role: "Senator"},
          { name: "Jonnathan Gale", role: "Senator"},
        ]},
      ],
      pending_laws: [
        { title: "Minecraft Bill", type: "Bill", votes: [
          { senator_id: "steam:2039120", vote: "for"},
          { senator_id: "steam:21382918", vote: "neutral"},
          { senator_id: "steam:2033120", vote: "for"},
          { senator_id: "steam:2439120", vote: "neutral"},
          { senator_id: "steam:2529120", vote: "against"},
        ], time: 1681442485000},
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
        <senatePage v-if="page == 'senate'" class="senate_page" :pending_laws="pending_laws" :player="player" :parties="parties"></senatePage>
      </div>
    </div>
  </main>
</template>
