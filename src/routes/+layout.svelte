<script>
  import "$lib/css/app.css";

  // Importing the 3 Svelte stores:
  import { recipeStore } from "$lib/js/recipes-store";
  import { ingredientStore, getIngredientById } from "$lib/js/ingredients-store";
  import { tagStore } from "$lib/js/tags-store";
  import Nav from "$lib/components/Nav.svelte";

  // Example of console logs showing how to access Svelte stores:

  // Logging data from recipeStore:
  // console.log($recipeStore);
  // Logging data from ingredientStoreL
  // console.log($ingredientStore);
  // Logging data from getIngredientById function:
  // console.log(getIngredientById(2));
  // Logging data from tagStore:
  // console.log($tagStore);
  // Check the console in your browser's developer tools to see the console logs above.

  // This is a special Svelte store which provides info about the current page.
  import { page } from "$app/stores";
  $: path = $page.url.pathname;
  
</script>



    <!-- menu -->
    <Nav/>

    <div class="container">
       <slot />
    </div>
