<script setup>

</script>

<script>
export default {
  props: {
    votes: Object, // { for: 0, neutral: 0, against: 0 }
  },
  data() {
    return {
      
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
  <div class="votes_buttons">
    <button>{{votes.for}}</button>
    <button>{{votes.neutral}}</button>
    <button>{{votes.against}}</button>
  </div>
</template>
