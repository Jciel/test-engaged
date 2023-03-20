<template>
  <section class="list-character-page">
    <div class="search-bar-container">
      <search-input
          v-model="actualSearch"
          @update:modelValue="searchCharacter">
      </search-input>
    </div>

    <div class="list-section">
      <character
          class="character-card"
          v-for="character in charactersList"
          :character="character"
          @click="toCharacter(character.id, character.name)">
      </character>
    </div>

    <div class="pagination-container">
      <v-pagination
          v-model="actualPage"
          :pages="info.pages"
          :range-size="2"
          active-color="#DCEDFF"
          @update:modelValue="functionName"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import useCharactersStore from "../stores/characters";
import Character from "../components/Character.vue";
import SearchInput from "../components/SearchInput.vue";
import VPagination from "@hennge/vue3-pagination";
import { debounce } from "../services/debounce";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default defineComponent({
  name: "ListCharacters",

  components: {
    SearchInput,
    Character,
    VPagination
  },

  setup () {
    const characterStore = useCharactersStore()
    const router = useRouter()
    const actualPage = ref<number>(1)
    const actualSearch = ref<string>('')
    const characters = computed(() => characterStore.getCharacters )
    const info = computed(() => characterStore.getInfo )

    const toCharacter = (id: number, name: string) => router.push({ name: 'Character', params: { name: name } })

    const searchCharacter = debounce((input: string) => {
      characterStore.searchCharacter(input)
      actualSearch.value = input
    }, 1000)

    const functionName = (pageValue: number) => {
      actualPage.value = pageValue
      characterStore.searchCharacter(actualSearch.value, pageValue)
    }

    onBeforeMount(() => characterStore.listAllCharacters(1))

    return {
      charactersList: characters,
      searchCharacter: searchCharacter,
      actualSearch: actualSearch,
      actualPage: actualPage,
      info: info,
      toCharacter: toCharacter,
      functionName: functionName,
    }
  }
})
</script>

<style lang="scss" scoped>
.list-character-page {
  .list-section {
    display: grid;
    grid-template-columns: 240px 240px 240px 240px;
    width: 100%;
    justify-items: center;
    row-gap: 40px;
    column-gap: 40px;
    justify-content: center;
    padding: 50px 0;

    .character-card {
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .pagination-container {
    display: flex;
    justify-content: center;
  }
}
</style>