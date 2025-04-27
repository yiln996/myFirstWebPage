  <script>
    import { tagStore } from "$lib/js/tags-store";  
    import Nav from "$lib/components/Nav.svelte"
  </script>
  
  <svelte:head>
  <title>Tags Page</title>
  </svelte:head>




  <h1>Tags Page</h1>

  <p>Welcome to the Tags Page! Below you'll find a list of tag definitions used throughout our recipe collection. These tags help you quickly identify recipes based on cuisine, dietary preferences, cooking time, and more. Use this guide to better understand what each tag means and how it can help you choose the perfect recipe.</p>
  
  <div class="tags-container">
  {#each $tagStore as tag}
    <div class="tag-item">
  
      <h2>{tag.name}</h2>
      
      <p>{tag.description}</p>
    </div>
  {/each}
</div>

<style>
.tags-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));   /* Responsive grid */
  gap: 20px;
  padding: 20px;
}

.tag-item {
  background-color: rgb(242, 227, 198,0.8) ;     /* #F2E3C6 */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
}

.tag-item:hover {
  transform: translateY(-5px); /* Hover effect for raising the item */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

h2 {
  color: #5E4B3C;
}




</style>