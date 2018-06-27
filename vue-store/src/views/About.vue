<template>
  <div class="about">
    <h1>This is an about page</h1>
  {{product.title}}
  </div>
</template>

<script>
//import axios from 'axios'
import service from '@/assets/service'
export default{
  data(){
    return{
      products: {}
    }
  },
  mounted(){
 service.getProducts(this.$route.query.id)
        .then(res=>{
          
        })
  }
}
</script>
