import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    const dbURL = 'http://localhost:3000/posts';

    try {
      let data = await fetch(dbURL);
      // console.log(data)

      if (!data.ok) {
        throw Error('No data available');
      }

      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      // console.log("ERROR!", error.value)
    }
  };

  return { posts, error, load };
};

export default getPosts;
