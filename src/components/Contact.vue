<template>
  <div class="contact_wrapper">
    <div class="header">
    <h4>Contact</h4>
    </div>
    <div class="address">
    <address>
      <strong>Frout Soup</strong>
      <br />Address 1
      <br />Address 1
      <br />Phone (123) 456-7890
    </address>
    <address>
      <strong>Email:</strong>
      <br />
      <p>contact@fruitsoup.com</p>
    </address>
    </div>
    <div class="map">
    <iframe
  width="600"
  height="450"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAiJSrfbevJzlA5QLLr740P6KvDgNtubbY&q=place_id:ChIJ16rPd_zbQUcR_VCmOq57n2g" allowfullscreen>
    </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style scoped>
.contact_wrapper {
  /* background: #f1e6da; */
  background: linear-gradient( rgba(185, 76, 76, 0.7),rgba(241, 236, 236, 0.7)),
  url("../assets/images/strawberry.jpg") no-repeat fixed top center / cover;
  height: 90vh;
  margin: 10px;
  padding: 10px;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  'header header'
  'address map';
  
}
h4 {
  margin-top:2rem;
}
.header {
  grid-area:header;
}

.address{
  grid-area:address;
}

.map {
  grid-area:map;
}
.map {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
   
}
.map iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
address {
  margin-bottom:3rem;
  font-size: 1.2rem;
  margin-top:2rem;
}
@media screen and (max-width: 900px) {
.contact_wrapper {
  background: #f1e6da;
  height: 100vh;
  margin: 10px;
  padding: 10px;
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
  'header'
  'address'
  'map'
}
address {
  margin-bottom:3rem;
  font-size: 1.2rem;
  margin-top:0rem;
}

  
}
</style> 