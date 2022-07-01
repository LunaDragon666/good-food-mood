const recipeTitle = document.querySelector("title");

const recipeContainer = document.querySelector(".recipe-container");
const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get("id");

console.log(id);

const singleUrl = "https://goodfoodmood.monikalie.no/wp-json/wc/store/products/" + id;

console.log(singleUrl);

async function fetchRecipe() {

    try {
        const response = await fetch(singleUrl);
        const details = await response.json();

        console.log(details);

        document.querySelector(".loading").innerHTML = "";
        createRecipe(details);
      
    }
    catch(error) {
        recipeContainer.innerHTML = theError("Oh no!");
    }
    
}

fetchRecipe();

function createRecipe(recipe) {
    recipeTitle.innerHTML = `Good Food Mood | ${recipe.name}`; 
    recipeContainer.innerHTML = `
    <div class="link-wrap">
        <a class="home" href="../index.html">Home</a> <span> / ${recipe.name} </span>
    </div>
		<article class="card">
        <div class="thumbnail">
        <input type="checkbox" id="thumb-trigger1">
        <label class="tt1" for="thumb-trigger1"><i class="fas fa-search-plus"></i></label>
      
        <div class="modal-overlay">
            <div class="modal-wrapper">
                <label for="thumb-trigger1" class="close-btn"><i class="fas fa-times"></i></label>
                <img src="${recipe.images[0].src}" alt="${recipe.name}">

            </div>
        </div>
    </div>

            <img id="modalImg" src="${recipe.images[0].src}" alt="${recipe.name}" />

            <div class="card-content">
            <h2>${recipe.name}</h2>

           <span class="food-info">
           <div>
           <i class="fa fa-clock"></i> ${recipe.prices.price} min.
           </div>
           <div>
           | <i class="fas fa-fire"></i> ${recipe.prices.regular_price} kcal | 
           </div>
           <div>
           <i class="fas fa-utensils"></i> ${recipe.attributes[1].terms[0].name} serving
           </div>
           </span>
            ${recipe.short_description}
            <span class="tags">
            <div>
            <span class="tag">&#10003; ${recipe.tags[0].name}</span>
            <span class="tag">&#10003; ${recipe.tags[1].name}</span>
            <span class="tag">&#10003; ${recipe.tags[2].name}</span>
            </div>
            <div>
            <span class="tag" id="warning">
            &#9888; ${recipe.attributes[0].terms[0].name}</span>
            </div>
            </span>
            </div>
          </article>

        <article class="recipe-content">
            ${recipe.description}
        </article>
    `;
}

//
