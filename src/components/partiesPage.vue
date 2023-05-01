<script setup>
import organizationChart from './charts/organizationChart.vue';
</script>

<script>
import { ColorPicker } from 'vue-accessible-color-picker';
export default {
  props: {
    party: Object,
    player: Object,
    leadership: Object,
    parties: Array,
  },
  data() {
    return {
      avariable_roles: ["Whip", "Caucus", "WhipA", "Senator"],
      hasParty: false,
      promoteWindow: false,
      promoteMember: null,

      create_party_form: { name: null, label: null, ideology: "Center", color: null }
    };
  },
  mounted() {
    if(this.party != null) {
      this.hasParty = true;
    }
  },
  methods: {
    updateColor(eventData) {
      this.create_party_form.color = eventData.colors.hex
    },
    assignRole(role, promoteMember) {
      if(this.getPosition() == 'Leader') {
        if(role == 'Whip Asistant') {
          role = 'WhipA';
        }
        let members_copy = this.party.members;
        for (let index = 0; index < members_copy.length; index++) {
          if(members_copy[index].id == promoteMember.id) {
            members_copy[index].role = role;
          }
        }
        this.$emit('changeRoles', members_copy, this.party.label);
      }
    },
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
    },
    checkVacants() {
      let control = ["Leader", "Whip", "Caucus", "Whip Asistant"];
      for (let index = 0; index < this.party.members.length; index++) {
        if(this.party.members[index].role == "Leader") {
          control[0] = "";
        }else if(this.party.members[index].role == "Whip") {
          control[1] = "";
        }else if(this.party.members[index].role == "Caucus") {
          control[2] = "";
        }else if(this.party.members[index].role == "WhipA") {
          control[3] = "";
        }
      }
      return control;
    },
    formatVacants() {
      let control = this.checkVacants();
      control[control.length] = "Senator";
      return control;
    },
    toStringCheckVacants() {
      let control = this.checkVacants();
      let reval = "";
      for (let index = 0; index < control.length; index++) {
        reval += control[index] + " ";
      }
      return reval;
    },
    createParty(form) {
      this.$emit('createParty', form);
      this.hasParty = true;
    }
  },
  components: {
		ColorPicker,
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
        <div v-if="getPosition() == 'Leader' && toStringCheckVacants() != '    '" class="alert_notification">
          <div>ALERT! This roles are unasigned:</div>
          <div>{{toStringCheckVacants()}}</div>
        </div>
        <div v-if="getPosition() == 'Leader'" class="parties_body_list">
          <div class="parties_members_list_row">
            <h4>Member</h4>
            <h4>Role</h4>
            <h4>Promote/Demote</h4>
            <h4>Expel</h4>
          </div>
          <div class="parties_members_list_row" v-for="member in party.members">
            <div>{{member.name}}</div>
            <div v-if="member.role == 'Leader'" style="font-weight: bold;">{{member.role}}</div>
            <div v-else>{{member.role}}</div>
            <button v-if="member.id != player.id" @click="promoteWindow = true, promoteMember = member, avariable_roles = formatVacants()">Promote/Demote</button>
            <button class="members_button" v-if="member.id != player.id">Expel</button>
          </div>
        </div>
        <div v-else class="parties_body_list">
          <div class="parties_members_list_row_a">
            <h4>Member</h4>
            <h4>Role</h4>
          </div>
          <div class="parties_members_list_row_a" v-for="member in party.members">
            <div>{{member.name}}</div>
            <div v-if="member.role == 'Leader'" style="font-weight: bold;">{{member.role}}</div>
            <div v-else>{{member.role}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="parties_heading">
        <h2>Parties panel</h2>
        <div>Create or join a party</div>
      </div>
      <div class="parties_body">
        <div class="parties_body_list">
          <div class="parties_body_list_row">
            <h4>Party name</h4>
            <h4>Label</h4>
            <h4>Members</h4>
            <h4>Color</h4>
            <h4>Join</h4>
          </div>
          <div class="parties_body_list_row" v-for="list_party in parties">
            <div>{{list_party.name}}</div>
            <div>{{list_party.label}}</div>
            <div>{{list_party.members.length}}</div>
            <div class="parties_color" :style="'background-color:' + list_party.color + ';'"></div>
            <button @click="this.$emit('joinParty', list_party.label), hasParty = true">Join</button>
          </div>
        </div>
        <div class="parties_creator_box">
          <h3 style="text-align: center;">Party creator</h3>
          <div class="parties_creator_names">
            <div>
              <label style="font-weight: bold;">Party name:</label>
              <input v-model="create_party_form.name" type="text">
            </div>
            <div>
              <label style="font-weight: bold;">Party label:</label>
              <input v-model="create_party_form.label" type="text" maxlength="4">
            </div>
          </div>
          <div class="parties_creator_names">
            <div>
              <label style="font-weight: bold;">Ideology:</label>
              <select v-model="create_party_form.ideology" name="" id="">
                <option value="Ideology" disabled>Ideology</option>
                <option value="Far left">Far left</option>
                <option value="Left">Left</option>
                <option value="Center">Center</option>
                <option value="Right">Right</option>
                <option value="Far right">Far right</option>
              </select>
            </div>
          </div>
          <div class="parties_creator_names">
            <div>
              <ColorPicker @color-change="updateColor"></ColorPicker>
            </div>
          </div>
          <button @click="createParty(create_party_form)">Create Party</button>
        </div>
      </div>
    </div>
    <div class="parties_actions">
      <organizationChart :imported_nodes="generateImportedNodes()"></organizationChart>
    </div>
    <div v-if="promoteWindow" class="textEditor">
      <div class="promote_card">
        <div class="promote_name">{{promoteMember.name}} -- {{promoteMember.role}}</div>
        <div>As leader you can assign different roles to your party members</div>
        <div class="roles_list">
          <div v-for="role in avariable_roles" class="role_row">
            <div class="role_row_format" v-if="role != '' && role != promoteMember.role && role != 'Leader'">
              <div style="font-weight: bold;">{{role}}</div>
              <button @click="assignRole(role, promoteMember), promoteWindow = false">Assign</button>
            </div>
          </div>
          <button @click="promoteWindow = false">Exit</button>
        </div>
      </div>
    </div>
  </div>
</template>
