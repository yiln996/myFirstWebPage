<script>
  import Nav from "$lib/components/Nav.svelte"

  let images = [
    '/images/main.png',
    '/images/carbonara.jpg',
    '/images/tikka.jpg',
    '/images/greek-salad.jpg'
  ];

  let current = 0;

  // auto rotating
  const interval = setInterval(() => {
    current = (current + 1) % images.length;
  }, 3000); 

</script>



<svelte:head>
  <title>Home Page</title>
</svelte:head>


<main>

  <h1>Welcome to The Recipe Book!</h1>
  <p>Discover a range of recipes here! Whether it's cooking a spaghetti or a lovely pancake, there's something here for every diet, and difficulty level.</p>
  <p class="highlight">WHAT TO COOK TONIGHT ? ?</p>
  <p>Explore our recipe categories, get inspired, and start cooking today!</p>

  <div class="slideshow-container">
    <img src={images[current]} alt="main slideshow" class="main-slideshow" />
  </div>

</main>


<style>
  img {
  width: 60%;
  max-width: 600px; 
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  }

  main {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }


  h1 {
      font-size: 2.5rem;
      color: #3f3834; 
      margin-bottom: 20px;
    }

  p {
      font-size: 1.2rem;
      color: #7c746c; 
      margin-bottom: 20px;
    }

  p.highlight {
    color: #D98324; 
    font-weight: bold;
  }

</style>

