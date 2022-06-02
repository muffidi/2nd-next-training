function Isr({meals}){

    console.log(meals)

    return(
        <div>
            <h2>ISR</h2>
            {
            meals && meals.length > 0 ? (
                <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(6, 1fr)'}}>
                    {
                        meals.map(meal => (
                            <div style= {{ padding: '16px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', fontWeight: '700'}} to={`/detail/${meal.idMeal}`} key={meal.idMeal}>
                            <img style ={{width: '100%', height: 'auto'}}
                            src={meal.strMealThumb} alt={meal.strMeal} />
                             <p>{meal.strMeal}</p>
                            </div>
                            ))
                    }
                </div>
            ) : (
                <p>Loading</p>
            )
        }
        </div>
    )
} 

export async function getStaticProps(){
    const data = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const result = await data.json();
    const meals = result.meals

    return {
        props:{meals},
        revalidate: 10
    }
}

export default Isr