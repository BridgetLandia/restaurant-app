<template>
  <header>
    <div class="header_logo">
      <div class="image_wrapper">
         <h1 href="/">Fruit Soup</h1>
        <nav class="nav">
      <ul class="nav">
        <router-link  :to="{ name: 'homeLink'}" tag="li">
          <a>Home</a>
        </router-link>
        <router-link :to="{ name: 'menuLink'}" tag="li">
          <a>Menu</a>
        </router-link>
         <router-link :to="{ name: 'basketLink'}" tag="li">
          <a>Basket</a>
        </router-link>
        <router-link :to="{name: 'contactLink'}" tag="li">
          <a>Contact</a>
        </router-link>
        <router-link :to="{name: 'aboutLink'}" tag="li">
          <a>About</a>
        </router-link>
      </ul>
    </nav>
      </div>
    </div>
   
  </header>
</template>

<script>
export default {
  name: "appHeader",
   methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 7rem;
  font-family:'Caveat', cursive;
  color: #fdcb9e;
  opacity:0.8;
  /* margin-bottom: 20rem;
  margin-top: 0rem;
  margin-left:2rem; */
}
h4,
h5 {
  margin: 2%;
}
.nav {
  max-width: 100vw;
  margin-top:7rem;
 
  
}
ul {
  padding: 10px 0;
  background:none;
  
  
}
li {
  display: flex;
  margin-right: 1rem;
  color: #fdcb9e;
  text-shadow:2px 2px #5e2d2d;
  font-family:'Caveat', cursive;
  font-size:2rem;
 
}
li:hover {
  text-decoration: underline;
}
.header_logo {
  background: linear-gradient( rgba(0, 0, 0, 0.5),rgba(218, 153, 153, 0.5)),
  url('../assets/images/blueberries.jpg') no-repeat fixed top center / cover;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 63vh;
  
}
.background-overlay {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  align-items: center;
}

.order_btn {
  background: #f79f38;
  border-radius: 3px;
  margin-top: 2rem;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
}
@media screen and (max-width: 800px) {
  h1 {
  font-size: 4rem;
  font-family:'Caveat', cursive;
  color: #fdcb9e;
  opacity:0.8;
  /* margin-bottom: 20rem;
  margin-top: 0rem;
  margin-left:2rem; */
}
.nav {
    display: flex;
    flex-direction: column;
    margin-top:1rem;
    align-items: center;
  }
  
}

</style>