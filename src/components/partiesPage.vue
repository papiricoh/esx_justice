<script setup>
import organizationChart from './charts/organizationChart.vue';
</script>

<script>
export default {
  props: {
    party: Object,
    player: Object,
    leadership: Object,
    parties: Array,
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
    leaveParty() {
      //TODO Leave party fetch
      this.$emit('leaveParty');
      this.hasParty = false;
    },
    getPosition() {
      for (let index = 0; index < this.party.members.length; index++) {
        if(this.party.members[index].id == this.player.id) {
          return this.party.members[index].role;
        }
      }
    },
    generateImportedNodes() {
      let nodes = [];
      nodes[nodes.length] = { id: "Speaker"}
      nodes[nodes.length] = { id: "Mayority party", title: "Mayority party", name: this.leadership.mayority.label}
      if(this.leadership.mayority.leadership.leader != null) {
        nodes[nodes.length] = { id: "Mayority Leader", title: "Mayority Leader", name: this.leadership.mayority.leadership.leader.name}
      }
      if(this.leadership.mayority.leadership.whip != null) {
        nodes[nodes.length] = { id: "Mayority whip", title: "Mayority whip", name: this.leadership.mayority.leadership.whip.name}
      }
      if(this.leadership.mayority.leadership.caucus != null) {
        nodes[nodes.length] = { id: "Mayority Caucus coordinator", title: "Mayority caucus coordinator", name: this.leadership.mayority.leadership.caucus.name}
      }
      if(this.leadership.mayority.leadership.whipa != null) {
        nodes[nodes.length] = { id: "Mayority whip assistant", title: "Mayority whip assistant", name: this.leadership.mayority.leadership.whipa.name}
      }

      if(this.leadership.minority != null) {
        nodes[nodes.length] = { id: "Minority party", title: "Minority party", name: this.leadership.minority.label}
        if(this.leadership.minority.leadership.leader != null) {
          nodes[nodes.length] = { id: "Minority Leader", title: "Minority Leader", name: this.leadership.minority.leadership.leader.name}
        }
        if(this.leadership.minority.leadership.whip != null) {
          nodes[nodes.length] = { id: "Minority whip", title: "Minority whip", name: this.leadership.minority.leadership.whip.name}
        }
        if(this.leadership.minority.leadership.caucus != null) {
          nodes[nodes.length] = { id: "Minority Caucus coordinator", title: "Minority caucus coordinator", name: this.leadership.minority.leadership.caucus.name}
        }
        if(this.leadership.minority.leadership.whipa != null) {
          nodes[nodes.length] = { id: "Minority whip assistant", title: "Minority whip assistant", name: this.leadership.minority.leadership.whipa.name}
        }
      }
      return nodes;
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
        <button @click="leaveParty()">Leave party</button>
      </div>
      <div class="parties_body">
        <div class="parties_actions">
          <organizationChart :imported_nodes="generateImportedNodes()"></organizationChart>
        </div>
      </div>
    </div>
    <div>
      <div class="parties_heading">
        <h2>Parties panel</h2>
        <div>Create or join a party</div>
      </div>
      <div class="parties_body">
        <div class="parties_body_list">
          <div class="parties_body_list_row">
            <h4>Party name</h4>
            <h4>Label</h4>
            <h4>Color</h4>
            <h4>Join</h4>
          </div>
          <div class="parties_body_list_row" v-for="list_party in parties">
            <div>{{list_party.name}}</div>
            <div>{{list_party.label}}</div>
            <div class="parties_color" :style="'background-color:' + list_party.color + ';'"></div>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
