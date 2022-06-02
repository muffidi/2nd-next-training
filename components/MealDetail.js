function MealDetail({meals}){
    return (
        <div>
            <h3>Details</h3>
            <div style= {{ padding: '16px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', maxWidth: '800px', margin: '0 auto'}} key={meals.idMeal}>
                            <p className="foodtitle">{meals.strMeal}</p>
                            <p>{meals.strInstructions}</p>
                            <img style ={{width: '100px', height: '100px'}}
                            src={meals.strMealThumb} alt={meals.strMeal} />
                            </div>
        </div>
    )
}

export default MealDetail