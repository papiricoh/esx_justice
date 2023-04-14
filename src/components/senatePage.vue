<script setup>
import voteUI from './voteUI.vue';
</script>

<script>
export default {
  props: {
    parties: Array,
    player: Object
  },
  data() {
    return {
      pending_laws: [
        { title: "Minecraft Bill", type: "Bill", votes: [
          { senator_id: "steam:2039120", vote: "for"},
          { senator_id: "steam:21382918", vote: "for"},
          { senator_id: "steam:2033120", vote: "for"},
          { senator_id: "steam:2439120", vote: "neutral"},
          { senator_id: "steam:2529120", vote: "against"},
        ], time: 1681442485000},
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
    <h2>Pending laws overview</h2>
    <div class="pending_laws_table">
      <table>
        <tr class="pending_laws_table_row">
          <th>Law name</th>
          <th>Law type</th>
          <th>For - Neutral - Against</th>
          <th>Open vote until</th>
        </tr>
        <tr class="pending_laws_table_row" v-for="law in pending_laws">
          <td>{{law.title}}</td>
          <td>{{law.type}}</td>
          <td><voteUI :player="player" :law="law"></voteUI></td>
          <td>{{new Date(law.time).toDateString()}}</td>
        </tr>
      </table>
    </div>
    <h2>Parties overview</h2>
    <div class="parties_seccion">
      <div class="party_card" v-for="party in parties">
        <h4 :style="'color: ' + party.color + ';'">{{party.name}}</h4>
        <div class="party_table">
          <table>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
            <tr v-for="member in party.members">
              <td>{{member.name}}</td>
              <td>{{member.role}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
