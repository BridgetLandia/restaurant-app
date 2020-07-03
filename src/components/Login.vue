<template>
  <div class="login_wrapper">
    <v-card
    class="mx-auto"
    color=#F3E5F5
    max-width="344"
    >
      <v-card-text>
    <p>Please login to continue</p>
    <v-form>
      <div>
        <v-text-field type="email" id="email" placeholder="Enter email" v-model="email"></v-text-field>
      </div>
      <div>
        <v-text-field  type="password" id="password" placeholder="Password" v-model="password"></v-text-field>
      </div>
      <button type="button"  @click.prevent="signIn">Sign in</button>
    </v-form>
      </v-card-text>
    </v-card>
  </div>
</template> 

<script>
import { store } from "../store"

export default {
    name: 'login',
    data() {
        return {
            email:"",
            password:""
        }
    },
     methods: {
       signIn() {
         const user = {
           email: this.email,
           password: this.password
         }
         store.dispatch('signIn', user)

        }
    }

}
</script>

<style>
.login_wrapper {
  display:flex;
  justify-content: center;
}
</style>