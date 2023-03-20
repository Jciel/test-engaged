<template>
  <section class="character-page">
    <div class="image-container">
      <img :src="selectedCharacter.image" />
    </div>

    <div class="character-info">
      <div class="name-container">
        <strong>Name:</strong> {{ selectedCharacter.name }}
      </div>

      <div class="list-episodes-container">
        <div
            class="character-item"
            v-for="episode in selectedCharacter.episode">
          <strong>Episode: </strong> <p>{{ episode.episode }}</p>
          <strong>Title: </strong> <p>{{ episode.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, PropType } from "vue";
import useCharactersStore from "../stores/characters";

export default defineComponent({
  name: "Character",

  props: {
    name: {
      type: String as PropType<string>,
      required: true,
      default: ''
    }
  },

  setup (props) {
    const store = useCharactersStore()
    const selectedCharacter = computed(() => store.getSelectedCharacter )

    onBeforeMount(() => { store.selectCharacter(props.name) })

    return {
      selectedCharacter: selectedCharacter
    }
  }
})
</script>

<style lang="scss" scoped>
.character-page {
  width: 100%;

  .image-container {
    img {
      display: block;
      width: 100%;
      border-radius: 15px;
    }
  }

  .character-info {
    display: grid;
    justify-items: center;

    .name-container {
      padding: 20px 0;
    }

    .list-episodes-container {
      text-align: left;

      .character-item {
        display: grid;
        grid-template-columns: 50% 50%;
        padding: 10px;

        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>