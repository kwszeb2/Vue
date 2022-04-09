<template>
  <div class="container">
    <div class="row">
        <div class="col" v-if="prod">
            
            <img v-bind:src="getImg(prod.ProdImg)">
            
          <div class="col2">
            {{prod.ProdName}}
            <br><br>
            <label for="price">Price: {{prod.ProdPrice}}</label>
            <br>
            <label for="quantity">Qty: 
            <input type="number" id="quantity" name="quantity" min="1" max="10"> </label>
            <button>Add To Cart</button>
              
            </div>
        </div>
    </div>
  </div> 
</template>

<script>
export default {
   props: ["id"],
    data() {
    return {
        prod: null
      }
  },
   methods:{
    getImg(pic){
      return require('../assets/images/'+pic);
    }
  },
  mounted(){
    fetch('http://localhost:3000/prods/'+ this.id)
      .then(res => res.json())
      .then(data => this.prod = data)
      .catch((error) => this.handle(error));
      //.catch(err => console.log(err.message))
  }

};
</script>

<style scoped>
img {
  height: 400px;
  width: 400px;
   margin: 0 auto;
}

.col {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0 ;
}
.col2 {
  flex-direction: row;
  margin: 0 auto;
  font-size: 36px;
  padding-top: 25px;
}

input {
  font-size: 12px;
  font-size: max(12px, 1em);
  font-family: inherit;
  padding: 0.10em 0.10em;
  background-color: #fff;
  border: 2px solid black;
  border-radius: 4px;
}

label{
display: flex;
}

button {
  display: flex;
  margin: 50px 0;
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}

button:hover {
  background-color: white;
  border: 1px solid black;
  color: black;
}




</style>