import BookList from './pages/BookList.vue';
import BookDetails from './pages/BookDetails.vue';

const routes = [
  {
    path: '/books/:id', component: BookDetails,
  },
  {
    path: '/books', component: BookList
  }
]

export { routes };
