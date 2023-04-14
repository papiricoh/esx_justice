<template>
  <div ref="editorContainer" class="summernote-editor"></div>
</template>

<script>
import $ from 'jquery';
import 'summernote';

export default {
  name: 'SummernoteEditor',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      summernote: null,
    };
  },
  mounted() {
    // Inicializar Summernote
    this.summernote = $(this.$refs.editorContainer).summernote({
      // Puedes agregar más opciones de configuración aquí
      callbacks: {
        onChange: (content) => {
          this.$emit('update:modelValue', content);
        },
      },
    });

    // Establecer el contenido inicial
    $(this.$refs.editorContainer).summernote('code', this.value);
  },
  beforeUnmount() {
    // Destruir la instancia de Summernote
    $(this.$refs.editorContainer).summernote('destroy');
    this.summernote = null;
  },
};
</script>

<style scoped>
.summernote-editor {
  /* Establecer el tamaño y estilo del editor aquí */
  height: 300px;
}
</style>