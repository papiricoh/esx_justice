<script setup>

</script>

<script>
export default {
  props: {
    law: Object, // { for: 0, neutral: 0, against: 0 }
    player: Object
  },
  data() {
    return {
      votes: {},
      personal_vote: null,
    };
  },
  mounted() {
    this.votes = this.calculate_votes(this.law);
    this.check_vote();
  },
  methods: {
    calculate_votes(law) {
      let new_law = { for: 0, neutral: 0, against: 0 }

      for (let index = 0; index < law.votes.length; index++) {
        if(law.votes[index].vote == "for") {
          new_law.for = new_law.for + 1;
        }else if(law.votes[index].vote == "against") {
          new_law.against = new_law.against + 1;
        }else {
          new_law.neutral = new_law.neutral + 1;
        }
      }
      return new_law;
    },
    check_vote() {
      for (let index = 0; index < this.law.votes.length; index++) {
        if (this.player.id == this.law.votes[index].senator_id) {
          this.personal_vote = this.law.votes[index].vote;
        }
      }
    },
    removeVote() {
      this.personal_vote = null;
      //remove from array vote and call calculate votes
      for (let index = 0; index < this.law.votes.length; index++) {
        if (this.law.votes[index].senator_id == this.player.id) {
          this.law.votes.splice(index, 1);
        }
      }
      this.votes = this.calculate_votes(this.law);
    },
    addVote(vote_type) {
      this.law.votes[this.law.votes.length] = { senator_id: this.player.id, vote: vote_type };
      this.votes = this.calculate_votes(this.law);
      this.personal_vote = vote_type;
    }
  },
  components: {
    
  }
};
</script>

<template>
  <div class="votes_buttons">
    <button v-if="personal_vote == 'for'" class="vote_button" @click="removeVote()">{{votes.for}}</button>
    <button v-else @click="addVote('for')">{{votes.for}}</button>
    <button v-if="personal_vote == 'neutral'" class="vote_button" @click="removeVote()">{{votes.neutral}}</button>
    <button v-else @click="addVote('neutral')">{{votes.neutral}}</button>
    <button v-if="personal_vote == 'against'" class="vote_button" @click="removeVote()">{{votes.against}}</button>
    <button v-else @click="addVote('against')">{{votes.against}}</button>
  </div>
</template>
