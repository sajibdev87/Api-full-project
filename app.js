
const loadCategories = ()=>{

          fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
          .then(res => res.json())
          .then(data =>displayCategories(data.categories))
        }
        
        loadCategories()
        
        const displayCategories = (categories)=>{
        
         const categoriesBox = document.getElementById('categories')
        
          categories.forEach(category=>{
            console.log(category);
            const DIV = document.createElement('div')
            DIV.classList.add('col')
            DIV.innerHTML = `
            <div class="card">
            <img src="${category.strCategoryThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${category.strCategory}</h5>
              <p class="card-text">${category.strCategoryDescription.slice(0,200)}</p>
               </div>
            </div>
            `
             categoriesBox.appendChild(DIV)
        
            })
        
        }
        
        document.getElementById('error').style.display ='none'
        
        const searchFood = () =>{
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        
        document.getElementById('error').style.display ='none'
        
        if(searchText==''){
        document.getElementById('error').style.display ='block'
        
        }
        
        else{
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displaySearchFood(data.meals))
        
        
        }
        
        }
        
        const displaySearchFood = (meals) => {
        
          const categoriesBox = document.getElementById('categories')
          categoriesBox.textContent = ''
        
        const searchResult = document.getElementById('search-result');
        searchResult.textContent ='';
        
        const singleMealDetails = document.getElementById('display-single-meal');
        singleMealDetails.innerHTML = '';
        
        document.getElementById('error').style.display ='none'
        if (meals == null) {
        
          document.getElementById('error').style.display ='block'
        } else{
        
          meals.forEach(meal =>{
            const DIV = document.createElement('div')
            DIV.classList.add('col')
            DIV.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)} see More ..</p>
               </div>
            </div>
            `
            searchResult.appendChild(DIV)
            })
            
        }
        
        }
        
        
        const loadMealDetails=(mealId)=>{
         console.log(mealId);
          
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
          .then(res => res.json())
          .then(data =>displayMealDetails(data.meals[0]))
        
        }
        
        const displayMealDetails=(meal)=>{
        const singleMealDetails = document.getElementById('display-single-meal');
        singleMealDetails.innerHTML = '';
         const div = document.createElement('div')
         div.classList.add('col')
         div.innerHTML = `
         <div  class="card">
         <img src="${meal.strMealThumb}" class="card-img-top" style="height:600px " alt="...">
         <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <h6 class="">${meal.strTags}</h6>
           <p class="card-text">${meal.strInstructions.slice(0,400)}</p>
           <a target ="-blank" href="${meal.strYoutube}" class="btn btn-primary">Go YouTube</a>
            </div>
         </div>
         
         `
        singleMealDetails.appendChild(div)
        
        }
               