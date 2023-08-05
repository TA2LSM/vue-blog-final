import { ref } from 'vue';

const getPost = id => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    const postURL = 'http://localhost:3000/posts/' + id;

    try {
      let data = await fetch(postURL);
      // console.log(data)

      if (!data.ok) {
        throw Error('That post that does not exist!');
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      // console.log("ERROR!", error.value)
    }
  };

  return { post, error, load };
};

export default getPost;
