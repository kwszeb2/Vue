<template>
    <div class="card" v-if="prods.length">
      <div class="cardBorder" v-for="prod in prods" :key="prod.id">
        <img v-bind:src="getImg(prod.ProdImg)">
        <!--<img :src="require(prod.ProdImg)">-->
          <div class="container">
              <router-link :to="{name: 'showDetails', params: {id:prod.id }}"><h4><b>{{prod.ProdName}}</b></h4> </router-link>
              <router-link :to="{name: 'showDetails', params: {id:prod.id }}"><h4>{{prod.ProdPrice}}</h4> </router-link>
              <router-link :to="{name: 'showDetails', params: {id:prod.id}}">
                <button class="btn">View details</button>
              </router-link>
          </div>
      </div>
    </div>
</template>

<script>

export default {
 data() {
    return {
      prods:[]
      }
  },
  methods:{
    getImg(pic){
      return require('../assets/images/'+pic);
    }
  },
  mounted(){
    fetch('http://localhost:3000/prods/')
      .then(res => res.json())
      .then(data => this.prods = data)
       .catch((error) => this.handle(error));
      //.catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
img {
  width: 350px;
  height: 350px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.cardBorder{
  padding: 25px;
  
}

.cardBorder:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
}

.container {
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
}

a {
  text-decoration: none;
}

.btn {
  color: white;
  background-color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  margin: 25px 0 ;
}
</style>