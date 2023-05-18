import { Author } from "./author";
export type Genre = "Biography" | "Roman";
export type Book = {
    id: string;
    name: string;
    author: Author;
    isbn: string;
    coverImage: string;
    genre: Genre;
    pageNumber: number;
};
