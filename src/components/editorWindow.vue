<template>
  <div class="toolbar" v-if="editor">
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">H1</button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">H2</button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">H3</button>
    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">Bold</button>
    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">Italic</button>
  </div>
  <editor-content :editor="editor" class="editor-container"  />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>Law body</p>',
      extensions: [
        Document,
        Paragraph,
        Text,
        Heading.configure({
          levels: [1, 2, 3],
        }),
        Bold,
        Italic,
      ],
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style scoped>
.toolbar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

button {
  cursor: pointer;
}

button.is-active {
  font-weight: bold;
}
.editor-container {
  height: 300px; /* Ajusta este valor a la altura deseada */
  overflow-y: auto;
  border: 2px solid black;
  border-radius: .4rem;
  padding: 1rem;
}
</style>