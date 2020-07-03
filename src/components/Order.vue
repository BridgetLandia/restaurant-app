<template>
  <div class="info_block">
    <h3>How to order</h3>
    <div class="info_block_content">
      <div class="mini_menu"><div>Menu</div></div>
      <div class="order_guide">
      <p>1. Choose from our menu</p>
      <p>2. Click on order.</p>
      <p>3. Pay upon delivery.</p>
      </div>
      <p>Minimum order amount: 2.000 Ft.
      Our phone number is +36 30 323 5070</p>
      <p>Customer Service: ugyfelszolgalat@fruitsoup.hu</p>
       <p>We do not accept any restaurant voucher or discount/gift cards for delivery orders!</p>
       </div> 
    </div>
</template>

<script>
export default {
  name: "order"
};
</script> 

<style scoped>
h3 {
  margin-bottom: 2rem;
  
}
.order_guide {
  margin-bottom: 1rem;
   color:#53482f;
   font-size: 1.2rem;
   font-weight: 700;
  font-family:'Caveat', cursive;
}
.mini_menu {
  background-color: #fff;
  color:#53482f;
  border-style: solid;
  border-width: 5px 8px 5px 7px;
  border-image: url('../assets/images/menu.png') 5 8 5 7 fill round;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
  height: 160px;
}
.mini_menu > div {
  margin:2rem 1rem;
  text-align: center;
  font-size: 1rem;
  color:#53482f;
  font-family:'Caveat', cursive;
}
</style>