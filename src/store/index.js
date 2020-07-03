import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAuth, dbMenuRef, dbOrdersRef  } from '../firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        menuItems: [],
          orders: [],
          basket: [],
          currentUser: null,
     
    },
    getters: {
        getMenuItems: 
            state => state.menuItems,
        getOrders: 
            state => state.orders,
        getBasket: 
            state => state.basket,
        numberOfOrders: 
            state => state.orders.length,
        currentUser: state => state.currentUser   
    },
    mutations: {
        ...vuexfireMutations,
        // addOrder: (state, orders) => state.orders.push(orders),
        userStatus: (state, user) => {
            // if(user) {
            //   state.currentUser = user
            // }
            // else {
            //   state.currentUser = null
            // }
            user === null
              ? state.currentUser = null
              : state.currentUser = user.email
          },
          addToBasket(state, selectedItem) {
             state.basket.push(selectedItem)
          },
          removeFromBasket(state, selectedItem) {
            state.basket.splice(state.basket.indexOf(selectedItem), 1)
         },
         clearBasket(state) {
            state.basket = []
         }
    },
    actions: {
        setMenuRef: firestoreAction(({ bindFirestoreRef }) => {
          // return the promise returned by `bindFirestoreRef`
          return bindFirestoreRef('menuItems', dbMenuRef.orderBy('category'))
        }),
        setOrdersRef: firestoreAction(({ bindFirestoreRef }) => {
          // return the promise returned by `bindFirestoreRef`
          return bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'))
        }),
        addNewOrder: async(context, order) => {
          try {
              await dbOrdersRef.add(order)
          }
          catch(error) {
            alert('Sorry, there was a problem placing your order, please try again.')
          }
        },
        removeOrder: async(context, id) => {
          try {
            const order =  await dbOrdersRef.doc(id)
              order.delete()
          }
          catch(error) {
            alert(`Erorr removing menu item, ${error}.`)
          }
        },
        addToBasket: async(context, selectedItem) => {
         try { const pizzaExists = await context.state.basket.find(
            pizza => pizza.name === selectedItem.name && pizza.size === selectedItem.size
        )
        if(pizzaExists) {
            pizzaExists.quantity++;
            return;
        }
        context.commit('addToBasket', selectedItem) } catch(error) {
              alert(`Sorry, there was a problem with adding your item to basket, please try again.${error.message}`)
            }
        },
        removeFromBasket: async(context, selectedItem) => {
          try { 
         context.commit('removeFromBasket', selectedItem) } catch(error) {
               alert(`Sorry, there was a problem with removing your item from basket, please try again.${error.message}`)
             }
         },
         clearBasket: async(context) => {
           try {
            context.commit('clearBasket')
           } catch(error) {
            alert(`Sorry, a problem occured by emptying your basket, please try again.${error.message}`)
           }
                
         },
          addMenuItem: async(context, meal) => {
            try {
                await dbMenuRef.add(meal)
            }
            catch(error) {
              alert(`Erorr creating new meal, ${error}.`)
            }
          },
            removeMenuItem: async(context, id) => {
              try {
                const item =  await dbMenuRef.doc(id)
                  item.delete()
              }
              catch(error) {
                alert(`Erorr removing menu item, ${error}.`)
              }

        },
        signIn: async ({ commit }, user) => {
            try {
                const userData = await firebaseAuth.signInWithEmailAndPassword(
                    user.email,
                    user.password
                );
                commit('userStatus', userData.user)
            }
            catch (error) {
                const errorCode = error.code
                 const errorMessage = error.message
                 if(errorCode === 'auth/wrong-password') {
                     alert('Wrong password')
                 } else {
                     alert(errorMessage)
                 }
            }
        },
        signOut: async ({commit}) => {
            try {
                await firebaseAuth.signOut()
                
            }
            catch(error) {
                alert(`Error signing out ${error}`)
            }
            commit('userStatus', null)
        }
    }
   
  })