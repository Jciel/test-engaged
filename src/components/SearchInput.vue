<template>
  <section class="search-input-section">
    <input
        placeholder="search"
        class="input"
        type="text"
        :value="value"
        @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from "vue";

export default defineComponent({
  name: "SearchInput",

  props: {
    value: {
      type: String as PropType<string>,
      required: true,
      default: ''
    }
  },

  setup(props) {

    return {
      value: toRef(props, 'value')
    }
  }
})
</script>

<style lang="scss" scoped>
.search-input-section {
  .input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #808080;
    outline: 0;
    font-size: 1.3rem;
    color: #000000;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: #808080;
      opacity: .5;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }
}
</style>