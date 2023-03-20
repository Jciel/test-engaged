import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import ListCharacters from "../views/ListCharacters.vue";
import Character from "../views/Character.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: 'list-characters'
    },
    {
        path: '/list-characters',
        name: 'ListCharacters',
        component: ListCharacters
    },
    {
        path: '/character/:name',
        name: 'Character',
        component: Character,
        props: true
    }
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index