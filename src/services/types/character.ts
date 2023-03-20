import {Episode} from "./episode";

export type Character = {
    id: number,
    name: string,
    image: string,
    episode: Array<Episode>
}