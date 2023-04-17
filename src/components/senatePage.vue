<script setup>
import voteUI from './voteUI.vue';
import editorWindow from './editorWindow.vue';
import readerWindow from './readerWindow.vue';
</script>

<script>
export default {
  props: {
    parties: Array,
    player: Object
  },
  data() {
    return {
      textEditorOn: false,
      text_editor: {title: null, type: "Bill", jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},


      textReaderOn: false,
      pending_laws: [
        { title: "Minecraft Bill", type: "Bill", votes: [
          { senator_id: "steam:2039120", vote: "for"},
          { senator_id: "steam:21382918", vote: "neutral"},
          { senator_id: "steam:2033120", vote: "for"},
          { senator_id: "steam:2439120", vote: "neutral"},
          { senator_id: "steam:2529120", vote: "against"},
        ], time: 1681442485000, jurisdiction: "Los Santos", ideology: "Center", body: "<p>Law text</p>"},
        { title: "Guns prohibition Bill", type: "Bill", votes: [
          { senator_id: "steam:2039120", vote: "neutral"},
          { senator_id: "steam:21382918", vote: "against"},
          { senator_id: "steam:2033120", vote: "against"},
          { senator_id: "steam:2439120", vote: "against"},
          { senator_id: "steam:2529120", vote: "against"},
        ], time: 2681442485000, jurisdiction: "Los Santos", ideology: "Far Left", body: "<p>Law text</p>"},
      ],
      reader_data: { title: null, type: null, votes: null, time: null, jurisdiction: null, ideology: null, body: null },
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
    },
    textReaderOff() {
      this.textReaderOn = false;
    },
    submitLaw(tlaw) {
      if(tlaw.title == null || tlaw.body == null) {

      }else {
        tlaw.votes = [{ senator_id: this.player.id, vote: "for"},];
        tlaw.time = Date.now();
        this.pending_laws[this.pending_laws.length] = tlaw;
        this.textEditorOn = false;
      }
    }
  },
  components: {
    
  }
};
</script>

<template>
  <div>
    <div>
      <div class="senate_page_heading">
        <h2>Pending laws overview</h2>
        <button style="margin: 1.4rem;" @click="textEditorOn = true">New Law</button>
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
            <td><button @click="reader_data = law, textReaderOn = true">Read</button></td>
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
    <div v-if="textEditorOn" class="textEditor">
      <div class="textEditorWindow">
        <div class="textEditorHeader">
          <h2>Law editor</h2>
          <button @click="textEditorOn = false">Exit</button>
        </div>
        <div class="textEditorInputs">
          <div class="textEditorInput">
            <span>Title:</span>
            <input v-model="text_editor.title" placeholder="Law title bill" maxlength="24" type="text">
          </div>
          <div class="textEditorInput">
            <span>Type:</span>
            <select v-model="text_editor.type"  name="law_type">
              <option>Constitution</option>
              <option>Amendment</option>
              <option>Bill</option>
              <option>Regional Law</option>
            </select>
          </div>
          <div class="textEditorInput">
            <span>Jurisdiction:</span>
            <select v-model="text_editor.jurisdiction" name="law_jurisdiction">
              <option>Los Santos</option>
              <option>Sandy Shores</option>
              <option>Grapeseed</option>
              <option>Paleto Bay</option>
            </select>
          </div>
          <div class="textEditorInput">
            <span>Ideology:</span>
            <select v-model="text_editor.ideology" name="law_ideology">
              <option>Far left</option>
              <option>Left</option>
              <option>Center</option>
              <option>Right</option>
              <option>Far right</option>
            </select>
          </div>
        </div>
        <div class="editorWindow">
          <editorWindow v-model="text_editor.body"></editorWindow>
        </div>
        <button @click="submitLaw(text_editor)">Submit law</button>
      </div>
    </div>
    <div v-if="textReaderOn" class="textEditor">
      <readerWindow @textReaderOff="textReaderOff" :reader_data="reader_data"></readerWindow>
    </div>
  </div>
</template>
