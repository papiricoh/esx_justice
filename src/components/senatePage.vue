<script setup>
import voteUI from './voteUI.vue';
import editorWindow from './editorWindow.vue';
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
          { senator_id: "steam:21382918", vote: "neutral"},
          { senator_id: "steam:2033120", vote: "for"},
          { senator_id: "steam:2439120", vote: "neutral"},
          { senator_id: "steam:2529120", vote: "against"},
        ], time: 1681442485000, body: null},
        { title: "Gun Bill", type: "Bill", votes: [
          { senator_id: "steam:2039120", vote: "for"},
          { senator_id: "steam:742823", vote: "for"},
          { senator_id: "steam:2033120", vote: "for"},
          { senator_id: "steam:2439120", vote: "neutral"},
          { senator_id: "steam:2529120", vote: "against"},
        ], time: 1881442485000, body: null},
      ],
    };
  },
  mounted() {
    //Fetch pending laws
  },
  methods: {
    updatePendingLaws(law) {
      for (let index = 0; index < this.pending_laws.length; index++) {
        if(this.pending_laws[index].title == law.title) {
          this.pending_laws[index] = law;
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
    <div class="senate_page_heading">
      <h2>Pending laws overview</h2>
      <button style="margin: 1.4rem;">New Law</button>
    </div>
    <div class="pending_laws_table">
      <table>
        <tr class="pending_laws_table_row">
          <th>Law name</th>
          <th>Law type</th>
          <th>For - Neutral - Against</th>
          <th>Open vote until</th>
          <th>Options</th>
        </tr>
        <tr class="pending_laws_table_row" v-for="law in pending_laws">
          <td>{{law.title}}</td>
          <td>{{law.type}}</td>
          <td><voteUI @updatePendingLaws="updatePendingLaws($event)" :player="player" :law="law"></voteUI></td>
          <td>{{new Date(law.time).toDateString()}}</td>
          <td><button>Read</button></td>
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
