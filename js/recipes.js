//API 
const recipeTitle = document.querySelector("title").innerHTML = "Good Food Mood | Recipe";

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
    recipeContainer.innerHTML = `
		  <article class="card">
      <img src="${recipe.images[0].src}" alt="${recipe.name}" />
      <div class="card-content">
        <h2>${recipe.name}</h2>

      <span class="food-info">
        <i class="fa fa-clock"></i> ${recipe.prices.price} min. | 
        <i class="fas fa-fire"></i> ${recipe.prices.regular_price} kcal | 
        <i class="fas fa-utensils"></i> ${recipe.id} serving
      </span>

      ${recipe.short_description}
      <div class="tags">
      <span class="tag-column">
      <div class="tag">${recipe.tags[0].name}</div>
      </span>
      <span class="tag-column">
      <div class="warning">
      <i class="fa fa-exclamation-triangle"></i> Egg
      </div>
      </span>
      </div>

      </div>
      </article>

      <article class="recipe-content">
        ${recipe.description}
      </article>
  `;
}

/* 
            <div class="card">
                <div class="imgy">
			        <img id="myImg" src="${recipe.images[0].src}" alt="${recipe.name}" />
                    <i class="fas fa-search-plus"></i>
                </div>
                <!-- The Modal -->
                <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01">
                    <div id="caption"></div>
                </div>
                <!-- The Modal ends -->
				<article class="card-content">
                        <h2>${recipe.name}</h2>
                    <span class="food-info">
                        <i class="fa fa-clock"></i> ${recipe.prices.price} min. | 
                        <i class="fas fa-fire"></i> ${recipe.prices.regular_price} kcal | 
                        <i class="fas fa-utensils"></i> ${recipe.id} serving
                    </span>
                    <p>
                       ${recipe.short_description}
                    </p>
                    <div class="tags">
                        <span class="tag-column">
                            <div class="tag">Diary-free</div>
                            <div class="tag">Gluten-free</div>
                            <div class="tag">Lowcarb</div>
                        </span>
                        <span class="tag-column">
                        <div class="warning">
                            <i class="fa fa-exclamation-triangle"></i> Egg
                        </div>
                    </span>
                    </div>
				</article>
			</div>
            <article class="recipe-content">
                <div>
                <h3>Ingredients</h3>
                <ul class="recipe-list">
                    <li class="recipe-item">
                        1 whole egg
                    </li>
                    <li class="recipe-item">
                        2 egg white
                    </li>
                    <li class="recipe-item">
                        salt & pepper
                    </li>
                    <li class="recipe-item">
                        chives or other herbs
                    </li>
                </ul>
                </div>
                <div>
                <h3>Instructions</h3>
                <ol class="recipe-instrucs">
                    <li class="step">
                        <span>Whisk or mash together eggs, salt and pepper with a hand mixer.</span>
                    </li>
                    <li class="step">
                        <span>Melt a little butter or oil in a frying pan and pour over the egg mixture, 
                        sprinkle finely chopped chives or herps as desired on one side before the egg 
                        yolk hardens. Turn and fry a little on the other side.</span> 
                    </li>
                    <li class="step">
                        <span>Fill with whatever you want. As good lukewarm as cooled.</span>
                    </li>
                </ol>
            </div>
            </article>
            </section>
*/