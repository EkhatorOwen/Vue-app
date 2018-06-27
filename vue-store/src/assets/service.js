import axios from 'axios'


export default {
    getProducts(){
        return axios.get('https://practiceapi.devmountain.com/products')
        .then(res=>{
         return res.data;
        })
    },

   async getProducts(id){
      return  this.products.find(c=>c.id==id)
    }

}