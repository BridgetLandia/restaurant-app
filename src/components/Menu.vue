<template>
  <div class="menu_wrapper">
    <!-- menu -->
       <!-- menu -->
    <div class="menu">
      <h3>~ Menu ~</h3>
      <div v-for="item in getMenuItems" :key="item.name">
        <div>
          <strong>{{ item.name }}</strong>
        </div>
        <div>
          <div class="description">{{ item.description }}</div>
        </div>
          <div v-for="(option, index) in item.options" :key="option[index]">
            <div class="price_wrapper">
            <div>{{ option.size }}"</div>
            <div>{{ option.price | currency }}
                <button type="button" class="add_button" @click="addToBasket(item, option)">+</button>
            </div>
           
            </div>
            </div>
            </div>
</div>
   <!-- shopping basket -->
    <div class="basket">
      <h3>~ Basket ~</h3>
      <div v-if="getBasket.length > 0">
      <div>
        <div class="basket_content" v-for="(item, index) in getBasket" :key="item[index]">
            <div>
              <button class="deduction_button" @click="decreaseQuantity(item)">-</button>
              <div>{{item.quantity}}</div>
              <button class="basket_add_button" @click="increaseQuantity(item)">+</button>
            </div>
            <div class="item_name">{{item.name}}</div><div class="item_size"> {{item.size}}"
              <div class="price">{{ item.price * item.quantity | currency }}</div>
            </div>
            
        </div>
      </div>
      <p class="total">Order total: {{total | currency}}</p>
      <button class="checkout_button" @click="addNewOrder">Place Order</button>
    </div>
    <div v-else>
        <p>{{basketText}}</p>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store } from "../store"


export default {
  name: "Menu",
  data() {
    return {
      basketText: ""
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
      increaseQuantity(item){
          item.quantity++;

      },
      decreaseQuantity(item){
          item.quantity--;
          if(item.quantity === 0){
              this.removeFromBasket(item)
          }

      }, 
      addNewOrder() {
        
         const order = {
           meals: {...this.getBasket},
           createdAt: new Date(),
         }
      //  this.$store.commit("addOrder", this.basket)
        store.dispatch('addNewOrder', order)
        store.dispatch('clearBasket')
        this.basketText = 'Thank you, your order has been placed'
    }
      
  },
  computed: {
    ...mapGetters(["getMenuItems"]),
    total() {
      let totalCost = 0
      this.getBasket.map(item => {
      totalCost += item.quantity * item.price})
      return totalCost
    },
    getBasket: {
      get() {
        return this.$store.state.basket
      },
      set (value) {
      this.$store.commit('update', value)
    }
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom:2rem;
}
.menu_wrapper {
  display: flex;
  flex-direction: column;
  
  
}
.menu {
  background-color: #fff;
  color:#53482f;
  border-style: solid;
  border-width: 60px 63px 60px 62px;
  border-image: url('../assets/images/menu.png') 60 63 60 62 fill round;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
  display:flex;
  flex-direction: column;
  justify-items: center;

}
.basket {
  background: #f1e6da;
  color:#53482f;
  border-width: 60px 63px 60px 62px;
  border-image: url('../assets/images/menu.png') 60 63 60 62 fill round;
  border-style: solid;
  border-width: 60px 63px 60px 62px;
  border-radius: 3px;
  height: 100%;
  margin: 10px;
  padding: 2px;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.basket_content {
  display:flex
}
.item_name {
  font-size: 1.4rem;
  margin-top:2.3rem;
  margin-left:0.5rem;
  width:60%
}
.description {
  font-size:1.3rem;
  margin:1rem 0rem;
  
}
.price_wrapper {
  display:flex;
  justify-content: space-around;
  margin:0rem 0rem;
  
}
.add_button {
  background:#f79f38;
  margin-left:0rem;
}
.basket_add_button {
  background:#f79f38;
  margin-left:0rem;
  padding:3px 12px;
}

.price{
  margin-top:2rem;
}

.item_size {
  margin-top:2.5rem;
  width:30%;
}

.deduction_button {
  margin-bottom:0rem;
  background:#f79f38;
  margin-left:0rem;
  padding:3px 15px;
  margin-top:1rem;
}
.total {
  font-weight: 600;
  margin-top:2rem;
}
.checkout_button {
  margin-top:2rem;
  background:#fdcb9e;
  font-size: 1rem;
}
@media screen and (min-width: 900px) {
  .menu_wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .menu {
    width: 65vw;
  }
  .basket {
    width: 35vw;
  }
.description {
  font-size:1.3rem;
  margin:1rem 3rem;
  
}
.price_wrapper {
  display:flex;
  justify-content: space-between;
  margin:0rem 3rem;
  
}
.add_button {
  background:#f79f38;
  margin-left:1rem;
}
  
}

</style> 