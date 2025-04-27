

<script>
    // Importing the Svelte store
    import { recipeStore } from "$lib/js/recipes-store";
    import { tagStore } from '$lib/js/tags-store';

    import Nav from "$lib/components/Nav.svelte"
    
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { writable, derived } from "svelte/store";
    
    // Create a writable store for searchQuery & selectedTag
    let searchQuery = writable("");

    let selectedTag = writable("");
 

    
    // Derived store to filter recipes based on the search query
    const filteredRecipes = derived(
        [recipeStore, searchQuery, selectedTag],
        ([$recipeStore,$searchQuery,$selectedTag]) => $recipeStore.filter(recipe => 
            recipe.name.toLowerCase().includes($searchQuery.toLowerCase()) &&
            ($selectedTag === "" || recipe.tags.includes($selectedTag))
        )
    );

    </script>
    
    <svelte:head>
      <title>Recipes Page</title>
    </svelte:head>
    
    
   
    
    <h1>All Recipes</h1>
    
    <p>
    Welcome to the recipes page! Here you will find a list of all the delicious recipes available. Each recipe includes its name, difficulty level, igredients and tags, so you can easily browse and choose your next cooking adventure.
    </p>

    <!-- Search Bar -->

    <div class ="search-container">
        <label for="search-input" > Search recipes by title </label>
        <img  id = "search-icon" src="/images/searchicon.jpg" alt="searchicon">
            <input
                type="text"
                placeholder="Type in a keyword and search for recipes by title..."
                bind:value={$searchQuery}
                class="search-bar" id="search-input" name="search-input" />
    </div>


    <!-- Tag Dropdown -->
    <div class="tag-container">
        <label for="tag-select">Filter by Tag:</label>
        <select id="tag-select" bind:value={$selectedTag}>
        <option value="">-- All Tags --</option>
        {#each $tagStore as tag}
            <option value={tag.name}>{tag.name}</option>
        {/each}
        </select>
    </div>


    <!-- left bar -->
    <div class = "layout">
        <aside class = "leftBar">
        <ul>
        {#each $filteredRecipes as recipe}
            <li class:selected = {$page.url.pathname === `/recipes/${recipe.id}`}>
            <a href={`/recipes/${recipe.id}`} class:active = {$page.url.pathname === `/recipes/${recipe.id}`} > <strong> {recipe.name} </strong></a>
            </li>
        
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Tags:</strong> {recipe.tags}</p>
    
        {/each}
    </ul>
    </aside>

    <!-- recipes in detail -->
    <section class = "recipedetails">
        <slot/>
    </section>
    </div>



    <style>
        .layout {
        display: flex;
        }



        .leftBar {
        width: 400px;
        padding: 20px;
        background-color: rgb(255,255,255 , 0.65);
        border-right: 1px solid #ccc;
        
        }

        .leftBar a:hover {
        background-color: #7C746C;
        color: white;
        padding: 10px;
        border-radius: 5px;
        }

        li {
            color: #7C746C;
        }

        a {
            font-size: clamp(1rem, 2.4vw, 1.3rem);  /*responsive font size*/
            color:  #D98324; ;
        }

        a.active {
        background-color: #7C746C;
        color: white;
        padding: 10px;
        border-radius: 5px;


        }

        .recipedetails {
        flex: 1;
        padding: 30px;
       
        }


        /* Search Styling */

        .search-container{
            display: flex;
            background-color: rgb(255,255,255 , 0.65);
            
        }

        .search-container p {
            margin: 5px;    
            color:  #3F3834;              
        }

        .search-container label{
            margin-top: 6px;
            margin-right: 5px;
            font-family: 'JosefinSans', Georgia, 'Times New Roman', Times, serif;
        }


        #search-icon{
            height: 20px;
            margin-top: 5px;
        }

        .search-bar {
        width: 70%;
        padding: 10px;
        margin-left: 10px;
        margin-bottom: 20px;
        border-radius: 20px;
        border: 1px solid #ccc;
        }
        

        /* Tag Styling */

        .tag-container {
        display: flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 20px;
        margin-bottom: 20px;

        }

        .tag-container label {
        margin: 5px;
        color: #3F3834;
        font-family: 'JosefinSans', Georgia, 'Times New Roman', Times, serif;
        }

        .tag-container select {
        width: 80%;
        border-radius: 20px;
        border: 1px solid #ccc;
        background-color: white;
        font-size: 1rem;
        color: #3F3834;
        font-family: 'JosefinSans', Georgia, 'Times New Roman', Times, serif;
        }




    </style>