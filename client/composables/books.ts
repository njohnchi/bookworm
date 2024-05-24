import { ref } from 'vue';


const books = ref([]);
const preference = ref('');

export default function useBooks() {
    return {
        books,
        preference,
    };
}
