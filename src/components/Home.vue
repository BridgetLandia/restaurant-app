<template>
  <div class="background">
       <div class="background_overlay">
       <span class="welcome_text">
        <span><h5>Feeling hungry?</h5></span>
        <span><button class="order_btn" @click="goToMenu">Let's order!</button></span>
       </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToMenu() {
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style>
h5 {
  text-shadow:1px 1px #5e2d2d;
}
.background {
  background: url("../assets/images/blueberries.jpg") no-repeat fixed top center / cover;
  height: 30vh;
  display: flex;
  text-align: center;
  align-items: center;
}
.background_overlay {
  display: flex;
  /* background-color: rgba(241,230,218, 0.5); */
  background: linear-gradient(rgba(218, 153, 153, 0.5), rgba(185, 76, 76, 0.5));
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 5px;
  align-items: center;
   
}
.background_overlay > span > span {
  margin-top:2rem;
  opacity: 1;
  
}

.order_btn {
  background: #f79f38;
  border-radius: 3px;
  margin-top: 2rem;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
  opacity:1;
}


</style>