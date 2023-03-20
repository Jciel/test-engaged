import {defineStore} from "pinia";
import { Character } from "../services/types/character";
import { PageInfo } from "../services/types/pageInfo";
import apiGraphQlService from "../services/apiGraphQlService";

const useCharactersStore = defineStore('characters', {
    state: () => {
        return {
            info: {} as PageInfo,
            characters: [] as Array<Character>,
            selectedCharacter: {} as Character | null
        }
    },

    getters: {
        getCharacters: state => state.characters,
        getSelectedCharacter: state => state.selectedCharacter,
        getInfo: state => state.info,
    },

    actions: {
        searchCharacter(name: string, page: number = 1) {
            const query = `{
                characters(page: ${page}, filter: { name: "${name}" }) {
                  info {
                    count,
                    pages,
                    next,
                    prev
                  }
                  results {
                    id,
                    name,
                    image,
                    episode {
                      id,
                      name,
                      episode
                    }
                  }
                }
              }`

            apiGraphQlService(query).then(res => {
                this.$state.info = res.data.characters.info
                this.$state.characters = res.data.characters.results
            }).catch(err => {
                throw err
            })
        },

        selectCharacter(name: string) {
            this.$state.selectedCharacter = this.characters.find((character: Character) => character.name === name) || null
        },

        listAllCharacters(page: number = 1) {
            const query = `{
                characters(page: ${page}) {
                  info {
                    count,
                    pages,
                    next,
                    prev
                  }
                  results {
                    id,
                    name,
                    image,
                    episode {
                      id,
                      name,
                      episode
                    }
                  }
                }
              }`


            apiGraphQlService(query).then(res => {
                this.$state.info = res.data.characters.info
                this.$state.characters = res.data.characters.results
            }).catch(err => {
                throw err
            })
        }
    }
})

export default useCharactersStore