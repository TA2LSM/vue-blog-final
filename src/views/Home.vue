<template>
  <div class="home">
    <h1>Home</h1>

    <!-- <h2>Refs</h2>
    <p>{{ person.name }} - {{  person.age }}</p>
    <button @click="updatePerson">Update Person</button>

    <h2>Reactive</h2>
    <p>{{ person2.name }} - {{  person2.age }}</p>
    <button @click="updatePerson2">Update Person2</button> -->

    <!-- <p>{{ name }}</p> -->

    <input type="text" v-model="search"> 
    <p>Search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">Stop watching</button>

  </div>
</template>

<script>
// import { ref, reactive } from 'vue'
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',

  setup() {
    // const person = ref({name: 'ta2lsm', age: 39})
    // const person2 = reactive({name: 'John', age: 15})

    //const name = ref('ta2lsm')    // reactive value
    //const name2 = reactive('John')    // not a reactive value. reactive expression can not use primitive types of values such a 'John'

    // const updatePerson = () => {
    //   person.value.age = 45
    // }

    // const updatePerson2 = () => {
    //   // no need to use "value"
    //   person2.age = 25

    //   //name2 = 'ninja'   // can not to be updated
    // }

    // return { person, person2, updatePerson, updatePerson2, name2 }
    // return { person, person2, updatePerson, updatePerson2 }

    // const name = computed(() => {
    //   return 'ta2lsm'
    // })

    // return { name }

    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach',])
    const search = ref('')

    //  watch hook
    // watch(search, () => {
    //   console.log('watch function ran')
    // })

    // watchEffect(() => {
    //   // always runs initially
    //   console.log('watchEffect function ran')

    //   // only runs when search.value changes
    //   console.log('watchEffect function ran', search.value)
    // })

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopWatchEffect = watchEffect(() => {
      // always runs initially
      console.log('watchEffect function ran')

      // only runs when search.value changes
      console.log('watchEffect function ran', search.value)
    })

    // These will stop watching
    const handleClick = () => {
      stopWatch()
      stopWatchEffect()
    }

    const matchingNames = computed( () => {
      return names.value.filter( (name) => name.includes(search.value))
    })

    return { names, search, matchingNames, handleClick }
  }
}
</script>
