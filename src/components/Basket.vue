<template>
    <div class="basket_layout">
      <div class="header">
        <h3>Basket</h3>
      </div>
      <div  v-if="getBasket.length > 0">
      <div class="basket_items" >
        <div class="basket_item_header">Items</div>
        <div class="basket_item_header">Size</div>
        <div class="basket_item_header">Price</div>
      </div>
        <div v-for="(item, index) in getBasket" :key="item[index]">
        <div class="basket_values">
        <div class="basket_value">{{item.name}}</div>
        <div class="basket_value">{{item.size}}</div>
        <div class="basket_value">{{ item.price * item.quantity | currency }}</div>
      </div>
     </div>
        <div class="total_wrapper">
        <div>Total:</div>
        <div>{{total | currency}}</div>
        </div>
          <button class="checkout_button" @click="addNewOrder">Place Order</button>
          </div>
          <div>
        <p>{{basketText}}</p>
    </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store } from "../store"

export default {
  name: "basket",
   data() {
    return {
      basketText: "Your basket is empty."
    }
  },
  methods: {
        addToBasket(item, option) {
          const selectedItem = 
              {
              name: item.name,
              price: option.price,
              size: option.size,
              quantity: 1
              }
              store.dispatch('addToBasket', selectedItem)
      },
      removeFromBasket(item){
          
          store.dispatch('removeFromBasket', item)
      },
        addNewOrder() {
         const order = {
           meals: {...this.getBasket},
           createdAt: new Date(),
         }
      //  this.$store.commit("addOrder", this.basket)
        store.dispatch('addNewOrder', order)
        this.getBasket = []
        this.basketText = 'Thank you, your order has been placed'
    }
  },
  computed: {
    ...mapGetters(["getBasket"]),
    total() {
      let totalCost = 0
      this.getBasket.map(item => {
      totalCost += item.quantity * item.price})
      return totalCost
    }
  }

}
</script>

<style scoped>
h3 {
  margin-top:2rem;
}
.basket_layout {
  background: linear-gradient( rgba(185, 76, 76, 0.9),rgba(241, 236, 236, 0.9)),
  url("../assets/images/fish.jpg") no-repeat fixed top center / cover;
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top:1rem;
}
.header {
  display: flex;
  margin-bottom:2rem;
}
.basket_items {
  
  display:flex;
  justify-content: space-between;
  width:90vw;
  
}
.basket_values {
  display:flex;
  justify-content: space-between;
  width:90vw;
  margin-top:2rem;
  
}
.basket_value {
  width:30%
}
.basket_item_header {
  width:30%
}
.total_wrapper {
  display: flex;
  justify-content: space-between;
  width:70vw;
  margin-top:3rem;
  font-weight: 800;
}
.checkout_button {
  margin-top:2rem;
  background:#fdcb9e;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important;
 
}

</style>