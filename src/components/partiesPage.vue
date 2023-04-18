<script setup>
import organizationChart from './charts/organizationChart.vue';
</script>

<script>
export default {
  props: {
    party: Object,
    player: Object,
    leadership: Object,
  },
  data() {
    return {
      hasParty: false,
    };
  },
  mounted() {
    if(this.party != null) {
      this.hasParty = true;
    }
  },
  methods: {
    getPosition() {
      for (let index = 0; index < this.party.members.length; index++) {
        if(this.party.members[index].id == this.player.id) {
          return this.party.members[index].role;
        }
      }
    }
  },
  components: {
    
  }
};
</script>

<template>
  <div>
    <div v-if="hasParty" class="parties_page">
      <div class="parties_heading">
        <div>
          <h2>{{ party.label }} - {{ party.name }}</h2>
          <div>Members: {{ party.members.length }}</div>
        </div>
        <div>Position: {{ getPosition() }}</div>
        <button>Leave party</button>
      </div>
      <div class="parties_body">
        <div class="parties_actions">
          <organizationChart></organizationChart>
        </div>
      </div>
    </div>
  </div>
</template>
