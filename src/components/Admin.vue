<template>
  <div class="admin_wrapper">
    <Login v-if="currentUser === null"/>
    <section v-if="currentUser !== null">
       <v-card class="current_user_wrapper">
        <span>Logged in as:</span>
        {{ currentUser }}
        <button type="button" class="btn_red" @click.prevent="signOut">Sign out</button>
    </v-card>
      <NewMeal />
    <div class="menu_wrapper">
      <h3>Menu:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
        </thead>
        <tbody  v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{ item.name }}</td>
            <td>
              <button type="button" class="btn_red" @click="removeMenuItem(item.id)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="oreder_wrapper">
          <div class="orders_wrapper">
      <h3>Current orders ({{ numberOfOrders }}):</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody v-for="(order, index) in getOrders" :key="order.id">
          <tr class="order_number">
            <th colspan="4">
              <strong>Order Number: {{ index + 1}}</strong>
              <button type="button" class="btn_red" @click="removeOrder(order.id)">&times;</button>
            </th>
          </tr>
          <tr v-for="orderItem in order.meals" :key="orderItem.id">
            <td>{{orderItem.name}}</td>
            <td>{{orderItem.price}}</td>
            <td>{{orderItem.quantity}}</td>
            <td>{{orderItem.price}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </section>
    
  </div>
</template>

<script>
import NewMeal from './NewMeal'
import Login from './Login'
import { store } from '../store/'
import { mapGetters } from "vuex";

export default {
  name: "admin",
  components: {
      Login,
      NewMeal
  },
 
  methods: {
      signOut() {
         store.dispatch('signOut')
      },
      removeMenuItem(id) {
         store.dispatch('removeMenuItem', id)
      },
       removeOrder(id) {
         store.dispatch('removeOrder', id)
      },
      
  },
   computed: {
   ...mapGetters(["getMenuItems", "numberOfOrders", "currentUser", "getOrders"]),
    
  },
  beforeRouteLeave: (to, from, next) => {
        if (confirm("You will be logged out when leaving admin?") == true) {
          store.dispatch("signOut");
           next()
           } 
           else {
             next(false);
            }
      }
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}
.current_user_wrapper,
.order_wrapper,
.menu_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: solid 1px #f79e38;
}
table {
  text-align: left;
  width: 70vw;
}
.order_number th {
  background: #F3E5F5;
}
.order_number button {
  margin: 0 10px;
}
input,
textarea {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  background: rgb(254, 254, 252);
  border: solid 1px #f79e38;
}
button {
  background: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
</style> 