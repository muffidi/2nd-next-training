export default function Ssgid({ meals }){
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



export async function getStaticPaths(){
    const data = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const result = await data.json();
    const meals = result.meals
    const path = meals.map((item) => {
        return {
            params: {id: item.idMeal.toString() },
        }
    });

    return {
        paths: path, 
        fallback: false
    };
}

export async function getStaticProps(ctx){
    const id = ctx.params.id
    const data = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + id);
    const result = await data.json();
    const meals = result.meals[0]

    return {
        props:{meals}
    }
}
