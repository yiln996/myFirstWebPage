

<script>
  import { page } from "$app/stores";

</script>

<img id="logo_img" src="/images/logo2.png" alt ="logo">
<h1> The Recipe Book </h1>

<div id="navbar">
<a href="/" class:active={$page.url.pathname === "/"}>  Home Page  </a>
<a href="/recipes" class:active={$page.url.pathname === "/recipes"} >  Recipes Page  </a>
<a href="/ingredients" class:active={$page.url.pathname === "/ingredients"}>  Ingredients Page  </a>
<a href="/tags" class:active={$page.url.pathname === "/tags"}>  Tags Page  </a>

</div>



<style>

    /* Gallery #EBEAEA, Merlin #3F3834, Tapa #7C746C, Gunsmoke #7E8484 */
   


#logo_img {
  width: 12%;  
  height: auto;
  vertical-align: middle;
}

h1 {
  display: inline-block;
  margin-left: 10px;
  font-size: 38px;
  color: #3F3834;  
  font-family: 'March Rough', 'Arial', sans-serif;
  margin-bottom: 0; 
  padding-bottom: 0; 
}

/* Navigation Bar (Menu) */
#navbar {
  background-color: #EBEAEA;  
  padding: 15px 0;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Slight shadow  */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;          /* wrapping for small screens */
}


#navbar a {
  margin: 0 20px;
  color: #3F3834;    
  font-size: 18px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;  /* Smooth transition on hover */
}

#navbar a:hover {
  background-color: #7C746C;  /* Tapa color on hover */
  color: #fff;  /* White text on hover */
}

#navbar a.active {
  background-color: #7C746C;   /*on click*/
  color: #fff;  
}

#navbar a:first-child {
  margin-left: 0;  /* Remove left margin for the first link */
}

#navbar a:last-child {
  margin-right: 0;  /* Remove right margin for the last link */
}


@media (max-width: 768px) {
  #navbar {
    justify-content: space-between;  /* Space out items on smaller screens */
  }

  #navbar a {
    margin: 5px;
    font-size: 16px;  /* Slightly smaller text on small screens */
  }

  #navbar {
    display: grid;  /* Use grid layout for smaller screens */
    grid-template-columns: repeat(2, 1fr); /* Create 2 columns */
    gap: 10px;
    text-align: center;
  }
}


</style>

