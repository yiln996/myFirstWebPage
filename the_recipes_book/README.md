# COMPSCI 719 Mid-semester Assignment

In this assignment you will create a multi-page Svelte application that has information about **recipes**, **ingredients** for recipes and the **tags** that describe the recipes.

The data for the recipes, ingredients and tags are included as arrays of JavaScript objects within three Svelte store files included in the project template.

The locations for the Svelte store files are:

- recipes store: `src/lib/js/recipes-store.js`
- ingredients store: `src/lib/js/ingredients-store.js`
- tags store: `src/lib/js/tags-store.js`

The main `+layout.svelte` page contains `import` statements and console logs with code comments demonstrating how the data from the stores can be accessed. These have been included here as a demonstration, you may include them elsewhere in other pages including any pages you create as needed.

The project template includes a basic Svelte project; you will add some files to the project as part of the assignment.

## Task Outline

For this task you will create a multi-page application that will display the data for **recipes**, **ingredients** and **tags** that is contained within the Svelte stores.

The page must be created using Svelte and must display the data from the .js files within the associated pages. For example, the `recipes` page should contain data from the `recipes-store.js` file.

The basic requirements are listed in the sections below.

This assignment allows a lot of freedom to choose the specifics of how you structure and style your pages; however, make sure to read the requirements carefully to ensure that you have met all requirements. 

You will be required to make new files within the project to meet the requirements of the tasks. You have freedom to choose exactly how to approach tasks and structure your project; however, it is suggested that you aim to follow the conventions of Svelte and use the examples and lab exercises from this course as a guide to approaching this assignment.

## Assignment Marks

The assignment has a total of 100 marks and the breakdown of marks relating to project requirements is included below.

## Use of Git during assignment

During the assignment, it is required that you use Git and commit regularly throughout the assignment in order to provide a clear Git history to the markers of the assignment. At a minimum it is required that you create a Git commit with an appropriate commit message for each major step of the assignment. Failure to use Git for each step will result in loss of marks.

# Step One: Basic Pages and Navigation Menu (40 marks)

This section contains the requirements for the basic pages and the navigation menu.

The basic pages for the site should include a **home page**, **recipes page**, **ingredients page** and **tags page**.

Read the requirements for each page and the navigation menu carefully. Note that the basic functionality of the recipes page should just contain an overview of all recipes with some information; however, in a later step you will add the functionality to be able to view full recipes.

For each page, you should use appropriate HTML elements to structure the contents of the page. The general requirements for each page are detailed below; however, you will need to make decisions about which HTML elements to use and how to structure your Svelte project. 

For all requirements listed below, you must make key decisions about how you structure your Svelte application. You should structure your page using Svelte and make decisions about when to use features of Svelte like components, pages and layouts. This assignment has a similar range of functionality to some of the examples and lab exercises from the course, so it is suggested that you refer back to these resources when revising how to approach this task.

It is suggested that you read all requirements carefully before approaching the task. 

Make sure that you are mindful of the requirements of the header and navigation menu and that the navigation menu is visible and displayed consistently across all pages.

## Home Page

Your site should have a home page that welcomes people to the site. This page should contain a welcome message with a description of the site; you should write your own description paragraph for the site. 

The Home Page must as a minimum contain a paragraph introducing the site; however, you may add extra images and information if you wish.

## Recipes Page

The recipes page should contain an overview of all recipes contained within the recipes data: `src/lib/js/recipes-store.js` .

At the start of the page include a paragraph introducing the page and describing what content is displayed on the page.

On the recipes page you only need to display the **name**, **difficulty** and **tags** for all recipes. This is just the overview of all recipes, so you should not show all recipe data for all recipes on this page; you will create the detailed recipe view in Step Two of this assignment.

Make sure that the **name**, **difficulty** and **tags** for all recipes are displayed using appropriate HTML elements.

You can choose what HTML elements you use to display the data on the page, but make sure that it enables a user to be able to easily browse all of the data.

## Ingredients Page

The ingredients page should contain all information related to all ingredients contained within the ingredients data: `src/lib/js/ingredients-store.js` .

At the start of the page include a paragraph introducing the page and describing what content is displayed on the page.

You can choose what HTML elements you use to display the data on the page, but make sure that it enables a user to be able to easily browse all of the data.

## Tags Page

The tags page should contain all information related to all tags contained within the tags data: `src/lib/js/tags-store.js` .

At the start of the page include a paragraph introducing the page and describing what content is displayed on the page.

You can choose what HTML elements you use to display the data on the page, but make sure that it enables a user to be able to easily browse all of the data.

## Header and Navigation Menu

You should have a consisten header and navigation menu that is displayed at the top of all pages and consistently visible across all pages.

The header should contain a main title with the name of your web app that is displayed across all pages and you can choose the name of your web app that is displayed in the title.

The navigation menu should contain links to all 4 of the pages listed above: Home Page, Recipes Page, Ingredients Page and Tags Page. 

The navigation menu should indicate which page the user is currently on by styling the navigation link for the currently active page differently.

Users of your site should be able to click between all pages of the site with the navigation menu and the navigation menu should display consistently across all pages. 

# Step Two: Detailed Recipes View (20 marks)

For this step, you will create the functionality to have a detailed recipes view to display the full details of a specific recipe to the user. 

For this step, users must be able to click on the title of any recipe in the recipes page to view the full details of that one recipe. 

Note that the main recipes page you created in Step One should just should the title, difficulty and tags for all recipes and in this step you will be creating the functionality that will allow the user to click on the title of any recipe and view the full details for that one recipe. You must not show all data for all recipes on the page.

You can choose how you achieve the requirements for this task; the detailed view of an individual recipe may be displayed within the main Recipes page or it may be a separate page from the main Recipes Page you created in Step One. You can choose how you structure this part of the Svelte project; it is suggested that you view the examples and lab exercises included in this course as there are examples of how this can be achieved.

When viewing the full details of a single recipe, it should display all of the data from `recipes-store.js` relating to that recipe.

You must make decisions around which HTML elements to use to display the full recipe details.

It should also display the names of ingredients rather than just the id of the ingredients. You may need to use JavaScript to accompolish this. Note that there is an extra function included within the `ingredients-store.js` file called `getIngredientById` that you may choose to use. 

You can choose how you structure your code and Svelte project to achieve the requirements above; however, make sure to think carefully about the conventions of Svelte. 

# Step Three: Styling and Accessibility (20 marks)

For this step, you should create a unique style for your page using CSS. 

Read the requirements below and make sure that you meet all requirements outlined below.

For this step you can choose how you use site level, page level and component level CSS styling; however, make sure that you test your page carefully. 

You may modify and restructure any code within your project as part of this step; however, make sure to test your page carefully and read all requirements.

For this step you are required to add some unique custom CSS that you write yourself. It is important that you write the CSS yourself for the structure of your page and the elements on your page. It is important that you do **NOT** copy over any prewritten CSS code that is not designed by you specifically for your site.

### Requirements for style:

- You must choose a custom color palette for your page and use at least 3 colors across elements on your page
  - It is suggested that you search online for premade color palettes or a color palette selection tool
- You must use some background colors and borders on some elements as part of your unique style and color palette
- You must choose a custom font and make all text on your page use a non-standard web font
- Make sure that your style is well chosen and that it uses a combination of colors, fonts and other style elements effectively to create a consistent style for the stie
- You must make your site responsive so that it displays well on both standard screens and mobile devices with narrower screen widths
  - Make sure that all things like navigation menus and images display well so that they are aligned and sized appropriately on different screen sizes
- You must add a hover transition on navigation links within the navigation menu so that when a link is hovered over, a smooth transition effect will be applied

### Requirements for accessibility:

You should ensure that your site has good accessibility.

This step requires that you research how to achieve good accessibility in web development and it may require that you modify some of the elements you have created in previous steps.

You should research information about accessibility in web development.

Here are some suggested links:

- W3Schools accessibility: [https://www.w3schools.com/html/html_accessibility.asp](https://www.w3schools.com/html/html_accessibility.asp)
- MDN accessibility: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML)

It is suggested that you at least read the readings above and make sure to meet basic accessibility requirements as outlined in those readings. Make sure to research accessibility further if required to understand how to meet accessibility requirements for the range of elements in your site.

# Step Four: Searching and recipe tag functionality (20 marks)

This is an advanced challenge step that may require extra research. There are many ways to achieve these requirements and you may add any JavaScript you wish including adding new functions to the Svelte store files. 

For this step you are required to add some basic search functionality to your Recipes Page and the ability to view all recipes matching a specific tag. 

### Search Functionality:

You must add basic search functionality to the Recipes Page that will allow users to search for recipes based on words that are contained within the title.

The search functionality should allow a user to type in a keyword and view all recipes that contain that keyword anywhere within the title.

You can choose how to integrate the search functionality into the Recipes Page; it is suggested that you investigate how search is integrated into similar user interfaces.

Your search interface should have good usability and follow established conventions for search functionality in web pages. 

### View recipes by tag:

When viewing the Recipes Page, users should be able to select a tag and view all recipes that contain that tag.

You can choose how to integrate the view by tag functionality into the Recipes Page; it is suggested that you investigate functionality in similar user interfaces.

Your search interface should have good usability and follow established conventions for use of tags in similar pages.
