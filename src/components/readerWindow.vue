<template>
  <div class="textEditorWindow overflowA">
    <div class="textEditorHeader">
      <h2>{{reader_data.title}}</h2>
      <button @click="closeWindow()">Exit</button>
    </div>
    <div class="textEditorInput" style="justify-content: space-around;">
      <div>Type: {{ reader_data.type }}</div>
      <div>Jurisdiction: {{ reader_data.jurisdiction }}</div>
      <div>Ideology: {{ reader_data.ideology }}</div>
    </div>
    <div style="align-self: center;">Date of publish/Date to end vote: {{new Date(reader_data.time).toDateString()}}</div>
    <div v-html="reader_data.body" class="readerWindowText"></div>
  </div>
</template>

<script>
export default {
  props: {
    reader_data: Object
  },
  components: {
  },

  data() {
    return {
      
    }
  },

  mounted() {

  },
  methods: {
    closeWindow() {
      this.$emit('textReaderOff');
    }
  },
  beforeUnmount() {
    
  },
}
</script>

<style scoped>
.readerWindowText {
  white-space: pre-line;
  align-self: center;
  width: 90%;
  word-wrap: break-word;
}
</style>