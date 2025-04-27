


<script>
import { ingredientStore, getIngredientById } from "$lib/js/ingredients-store";
import Nav from "$lib/components/Nav.svelte"
</script>

<svelte:head>
  <title>Ingredients Page</title>
</svelte:head>



<h1>Ingredients Page</h1>
<p>Welcome to the ingredients page! Below, you can browse through the list of all available ingredients, including their types, units, and prices.</p>

<div class="ingredient-list">
  {#each $ingredientStore as ingredient}  
    <div class="ingredient-item">
      <img 
        src={`/images/${ingredient.img}`} 
        alt={ingredient.name} 
        class="ingredient-image"
      />
   
    <h2>{ingredient.name}</h2>
    <div class = "ingredient-info">
    <p><strong>Type:</strong> {ingredient.type}</p>
    <p><strong>Unit:</strong> {ingredient.unit}</p>
    <p><strong>Price:</strong> ${ingredient.price.toFixed(2)}</p>
    </div>
    </div>    
  {/each}
</div>


<style>

.ingredient-list { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));   /* Responsive grid */
  gap: 10px;
}

.ingredient-item {
  background-color:rgb(242, 227, 198,0.8); /* #F2E3C6; */
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  box-shadow:  0 8px 15px rgba(0, 0, 0, 0.15);
  width: 80%;

 
}

.ingredient-item:hover {
  transform: translateY(-5px); /* Hover effect for raising the item */
  
}



img{
  width:280px;
  display: block;
  margin:  auto;
  object-fit: contain;

}


.ingredient-info{
 text-align: center;

  
}

h2 {
  color: #5E4B3C;
  text-align: center;
}


</style>