<script>
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
    import { recipeStore } from '$lib/js/recipes-store';
    import { ingredientStore, getIngredientById } from "$lib/js/ingredients-store";

    // Create a reactive store that returns the current recipe based on $page.params.id
    const currentRecipe = derived(
    [recipeStore, page],
    ([$recipeStore, $page]) => $recipeStore.find(r => r.id == $page.params.id)
    );

  </script> 


    {#if $currentRecipe}
    <h2>{$currentRecipe.name}</h2>
    <img src ={`/images/${$currentRecipe.image}`} alt={$currentRecipe.name} />
    <p><strong>Difficulty:</strong> {$currentRecipe.difficulty}</p>
    <p><strong>Cooking Time:</strong> {$currentRecipe.cookingTime} minutes</p>
    <p><strong>Tags:</strong> {$currentRecipe.tags.join(', ')}</p>
    <p><strong>Ingredients:</strong>
        
        <ul>
        {#each $currentRecipe.ingredients  as ingred}
                <li> {getIngredientById(ingred).name} </li>
            
        {/each} 
        </ul>

    <p><strong>Steps:</strong></p>
    <ol>
        {#each $currentRecipe.steps as step}
        <li>{step}</li>
        {/each}
    </ol>
    {:else}
    <p>Recipe not found.</p>
    {/if}



