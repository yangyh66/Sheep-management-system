<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
export default {
  name: 'App',
  created(){
  },
  methods: {
    ...mapMutations({
      change: 'changeLoginStatus'
    }),
  }
}
</script>

<style>
  html,body,#app{
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
