<template>
  <div class="home">
    <div @click="goTo(prod.id)" :key="prod.id" v-for="prod in products">
      <img :src="prod.image" width="200px" alt=""> {{prod.title}}
      <hr/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'

import service from '@/assets/service'

export default {
 data(){
   return {
     products: []
   }
 }, 
 mounted(){
  service.getProducts()
          .then(response=>
           {this.products = response.data}
          )
 },
 methods: {
   goTo(id){
     this.$router.push(`/about?id=${id}`)
   }
 }
}
</script>