<template>
  <div>
    <div class="info_block_content">
     <p id="about">We are passionate and empowered to take great care of our employees, our guests and our community. 
      We believe in working 
      closely with local farmers and purveyors to serve delicious food and drinks that people crave.</p>
      </div>
     <h4>Click on the link below for more info</h4>
    <nav>
      <ul>
        <router-link :to="{name: 'orderLink'}" tag="li">
          <a class="nav-link">Ordering Guide</a>
        </router-link>
        <router-link :to="{ name: 'deliveryLink'}" tag="li">
          <a class="nav-link">Delivery info</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script> 

<style scoped>
a {
  margin-right: 2rem;
  color: #fdcb9e;
  font-family:'Caveat', cursive;
  text-shadow:2px 2px #5e2d2d;
}
#about {
  margin-bottom:0rem;
}

@media screen and (max-width: 900px) {
h4 {
    margin: 0rem 2rem;
    font-size: 1.2rem;
}
}
</style>