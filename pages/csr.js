import { useEffect, useState } from "react";

export default function Csr() {
  const [todo, setTodo] = useState();

  const getData = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();

    setTodo(data.meals);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(todo)

  return (
      <div>
          <h3>CSR</h3>
          {
            todo && todo.length > 0 ? (
                <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(6, 1fr)'}}>
                    {
                        todo.map(meal => (
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
