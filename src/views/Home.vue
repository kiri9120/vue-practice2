<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SampleComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SampleComponent from '@/components/SampleComponent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    SampleComponent
  }
}
</script>
