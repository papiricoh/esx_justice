<script setup>

</script>

<script>
export default {
  props: {
    
  },
  data() {
    return {
      laws: [
        { title: "Los Santos Constitution", type: "Constitution", time: 1681442485000, jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},
        { title: "Minecraft Bill", type: "Bill", time: 1681442485000, jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},
      ],
    };
  },
  mounted() {
    
  },
  methods: {

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
          <div class="laws_menu_button" v-for="law in laws">
            <button>{{law.title}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
