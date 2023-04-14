<template>
  <div ref="editorContainer" class="quill-editor"></div>
</template>

<script>
import Quill from 'quill';

export default {
  name: 'QuillEditor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      quill: null,
    };
  },
  mounted() {
    // Inicializar Quill
    this.quill = new Quill(this.$refs.editorContainer, {
      theme: 'snow', // o 'bubble'
      // Puedes agregar más opciones de configuración aquí
    });

    // Establecer el contenido inicial
    this.quill.setContents(this.value);

    // Escuchar cambios en el contenido
    this.quill.on('text-change', () => {
      const html = this.$refs.editorContainer.children[0].innerHTML;
      this.$emit('update:modelValue', html);
    });
  },
  beforeUnmount() {
    // Destruir la instancia de Quill
    this.quill = null;
  },
};
</script>

<style scoped>
.quill-editor {
  height: 300px;
}
</style>