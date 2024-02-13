import { credits } from "./credits";
import { Genre } from "./genre";


export class Movie {
    adult?: boolean;
    backdrop_path?: string;
    genres?: Genre[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: Date;
    title?: string;
    video?: boolean;
    credits ?: credits;
}