<script setup>

</script>

<script>
export default {
  props: {
    law: Object, // { for: 0, neutral: 0, against: 0 }
  },
  data() {
    return {
      votes: {},
    };
  },
  mounted() {
    this.votes = this.calculate_votes(this.law);
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
  },
  components: {
    
  }
};
</script>

<template>
  <div class="votes_buttons">
    <button>{{votes.for}}</button>
    <button>{{votes.neutral}}</button>
    <button>{{votes.against}}</button>
  </div>
</template>
