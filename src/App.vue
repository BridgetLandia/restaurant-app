<template>
   <div id="app">
    <app-header/>
    <router-view></router-view>
    <div class="info_block_wrapper">
      <router-view name="order"></router-view>
      <router-view name="delivery"></router-view>
    </div>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import { dbMenuRef, dbOrdersRef } from './firebase'

export default {
  name: 'App',

  components: {
    appHeader,
  },
   created(){
    this.$store.dispatch('setMenuRef', dbMenuRef)
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }

  
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color:#53482f;
}
/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey; 
}
body {
  font-family: "Crimson Text", "sefif";
  margin: 0;
  font-size: 1.5em;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  background: #f1e6da;
}
li {
  list-style: none;
}
span {
  margin: 0 5px;
}
button {
  background: #f79f38;
  border-radius: 3px;
  margin-bottom: 2rem;
  padding: 5px;
  cursor: pointer;
  box-shadow: 
  0 3px 5px -1px rgba(0,0,0,.2),
  0 6px 10px 0 rgba(0,0,0,.14),
  0 1px 18px 0 rgba(0,0,0,.12)!important;
}
.info_block_wrapper {
  display: flex;
  flex-direction: column;
}
.info_block {
  /* background: #f1e6da; */
  background: linear-gradient( rgba(185, 76, 76, 0.7),rgba(241, 236, 236, 0.7)),
   url("../src/assets/images/blueberries.jpg") no-repeat fixed top center / cover;
  opacity:0.8;
  margin: 10px 0;
  padding: 10px;
  
  
}
.info_block h3 {
  text-align: center;
}
.info_block_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  margin: 2rem;
}

.info_block_content > p {
   /* color:#2c3e50; */
   color:#53482f;
   font-size: 1.2rem;
   margin-bottom: 2rem;
   font-weight: 700;
   font-family:'Caveat', cursive;
   
  /* font-family: 'Roboto Mono', monospace; */
}

@media screen and (min-width: 900px) {
  .info_block {
    width: 100%;
  }
  .info_block_wrapper {
    flex-direction: row;
  }
  .info_block:nth-child(2) {
    margin: 10px;
  }
  .info_block:nth-child(2) img {
    order: -1;
  }
  .info_block_content {
    flex-direction: column;
    align-items: center;
  }
}
</style>

