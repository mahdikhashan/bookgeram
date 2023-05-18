import { Author, Book } from "@bookgeram/domain";
import { defineStore } from "pinia";

export const useBookStore = defineStore("counter", {
  state: () => ({
    books: [
      {
        author: {
          fullName: "Ali Brox",
          id: "df",
          profilePicture: "fasd",
        },
        coverImage: "fasdf",
        genre: "Biography",
        id: "asdfasdf",
        isbn: "fasd",
        name: "my autobiography",
        pageNumber: 12,
      },
    ] as Book[],
  }),
  getters: {
    bookByAuthor: (state) => {
      return (authorId: Pick<Author, "id">) =>
        state.books.filter((book) => book.author === authorId);
    },
  },
  actions: {},
});
