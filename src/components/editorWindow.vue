<template>
  <div class="toolbar" v-if="editor">
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()">H1</button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()">H2</button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()">H3</button>
    <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }"><font-awesome-icon :icon="['fas', 'bold']" /></button>
    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }"><font-awesome-icon :icon="['fas', 'italic']" /></button>
    <button @click="editor.chain().focus().toggleBulletList().run()"><font-awesome-icon :icon="['fas', 'list']" /></button>
    <button @click="editor.chain().focus().toggleOrderedList().run()"><font-awesome-icon :icon="['fas', 'list-ol']" /></button>
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
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
      htmlContent: null,
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
        ListItem,
        BulletList,
        OrderedList,
      ],
    })
  },
  methods: {
    getHtmlContent() {
      this.htmlContent = this.editor.getContent({ type: 'html' })
    },
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
  padding: .4rem;
  border: 3px solid black;
  border-bottom: 0;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;
}

button {
  cursor: pointer;
}

button.is-active {
  font-weight: bold;
}
.editor-container {
  min-height: 18rem;
  max-height: 22rem;
  overflow-y: auto;
  border: 3px solid black;
  border-bottom-left-radius: .4rem;
  border-bottom-right-radius: .4rem;
  padding: 1rem;
}
.toolbar {
  gap: 0;
  padding: 0;
}
button {
  border: 0;
  border-radius: 0;
  padding: .4rem;
  border-right: 1px solid black;
}
.toolbar > button:nth-child(1) {
  border-top-left-radius: .1rem;
  
}
</style>