<template>
<div>
 
  <v-card color=#F3E5F5>
    <h4>Add New Meal:</h4>
  <v-form d-flex>
    <v-container>
    <v-row justify="center">
    <v-col md="12" offset-md="6">
      <label>Category</label>
      <v-text-field type="text" id="name" v-model="newMeal.category"></v-text-field>
      <label for="name">Name</label>
      <v-text-field type="text" id="name" v-model="newMeal.name"></v-text-field>
      <label for="description">Description</label>
      <v-text-field type="text" id="description" v-model="newMeal.description" rows="5"></v-text-field>
    <p>
      Option 1:
    </p>
      <label for="size1">Size (")</label>
      <v-text-field type="text" id="size1" v-model="newMeal.options[0].size"></v-text-field>
      <label for="price1">Price</label>
      <v-text-field type="text" id="price1" v-model="newMeal.options[0].price"></v-text-field>
      
    <p>
      Option 2:
    </p>
      <label for="size2">Size (")</label>
      <v-text-field type="text" id="size2" v-model="newMeal.options[1].size"></v-text-field>
      <label for="price2">Price</label>
      <v-text-field type="text" id="price2" v-model="newMeal.options[1].price"></v-text-field>
    <button type="button" class="btn_green" @click="add">Add</button>
    </v-col>
  </v-row>
  </v-container>
  </v-form>
  </v-card>
  
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: "addNewMeal",
  data() {
      return {
          newMeal: {
            category: 1,
            name: "Eg. Margherita",
            description: "Eg. A delicious tomato based pizza topped with mozzarella",
             options: [
            {
              size: 9,
              price: 6.95
            },
            {
              size: 12,
              price: 10.95
            }
          ]
          }
      }
  },
  methods: {
      add(){
          // dbMenuRef.add(this.newPizza)
          store.dispatch('addMenuItem', this.newMeal)
      }
  }
};
</script>

<style scoped>
h4 {
  padding-top:2rem;
}
.v-text-field{
     
      padding: 5px;
 
}
label {
  display: block;
  margin: 0 0 10px 0;
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