<template>
  <div class="character-card-container">
    <img class="character-img" :src="character.image">
    <div class="character-name"> {{ character.name }} </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from "vue";
import { Character } from "../services/types/character";

export default defineComponent({
  name: "Character",

  props: {
    character: {
      type: Object as PropType<Character>,
      required: true
    }
  },

  setup (props) {
    return {
      character: toRef(props, "character")
    }
  }
})


</script>

<style lang="scss" scoped>
.character-card-container {
  width: 240px;
  //border: 1px solid #000000;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 1) 0 8px 24px;

  img {
    width: 100%;
    margin-bottom: 25px;
    border-radius: 15px;
    display: block;
  }
}
</style>
￼