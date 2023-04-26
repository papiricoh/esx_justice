<script setup>

</script>

<script>
export default {
  props: {
    
  },
  data() {
    return {
      law_page: "Constitution",
      laws: [
        { title: "Los Santos Constitution", type: "Constitution", time: 1681442485000, jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},
        { title: "Minecraft Bill", type: "Bill", time: 1681442485000, jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},
        { title: "d Bill", type: "Bill", time: 1681442485000, jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},
      ],
      displayed_laws: [],
    };
  },
  methods: {
    updateLawList() {
      this.displayed_laws = [];
      for (let index = 0; index < this.laws.length; index++) {
        if(this.laws[index].type == this.law_page) {
          this.displayed_laws[this.displayed_laws.length] = this.laws[index];
        }
      }
    }
  },
  mounted() {
    this.updateLawList();
  },
  components: {
    
  }
};
</script>

<template>
  <div>
    <div class="laws_header">
      <h2>Laws</h2>
      <p>Seach to diferent laws</p>
    </div>
    <div class="laws_body">
      <div class="laws_seccion">
        <div class="laws_seccion_menu">
          <div class="laws_menu_button">
            <button class="active_button" v-if="law_page == 'Constitution'">Constitution</button>
            <button @click="law_page = 'Constitution', updateLawList()" v-else>Constitution</button>
          </div>
          <div class="laws_menu_button">
            <button class="active_button" v-if="law_page == 'amendment'">Amendment</button>
            <button @click="law_page = 'amendment', updateLawList()" v-else>Amendment</button>
          </div>
          <div class="laws_menu_button">
            <button class="active_button" v-if="law_page == 'Bill'">Bill</button>
            <button @click="law_page = 'Bill', updateLawList()" v-else>Bill</button>
          </div>
          <div class="laws_menu_button">
            <button class="active_button" v-if="law_page == 'Regional Law'">Regional Law</button>
            <button @click="law_page = 'Regional Law', updateLawList()" v-else>Regional Law</button>
          </div>
        </div>
        <div class="laws_seccion_body">
          <div v-for="law in displayed_laws" class="law_container">
            <div>{{ law.title }}</div>
            <div>{{ law.jurisdiction }}</div>
            <div>{{ law.ideology }}</div>
            <div>{{ new Date(law.time).toDateString() }}</div>
            <button>Read</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
