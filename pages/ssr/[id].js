import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Ssrid({ meals }){
    const MealDetail = dynamic(() => import('@components/MealDetail'),
    {suspense: true,
    })
    return (
        <div>
        <Suspense fallback={`loading`}>
        <MealDetail meals={meals} />
        </Suspense>
        </div>
    )
}



export async function getServerSideProps(ctx){
    const data = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + ctx.params.id);
    const result = await data.json();
    const meals = result.meals[0]

    return {
        props:{meals}
    }
}
