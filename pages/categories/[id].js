import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_PRODUCTS_BY_CATEGORY, GET_CATEGORIES } from "../../components/schema";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useStyles } from "@styles/style";

const Detail = () => {
    const buttons = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            categoryId: id
        }
    });
    if (loading) return 'Loading...';
    if (error){ 
        return `Error! ${error.message}`;
    }
    console.log(id)

    return (
        <div style={{padding: '10px 0 0 0' , display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(6, 1fr)'}}>
            <Head>  
                <title>Detail</title>
            </Head>
            {/* <button onClick={() => getCategory()}>Load</button> */}
            
            {data?.category && data.category.products.items.map(product => (
                <div key={product.id} style={{ padding: '16px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', maxWidth: '800px', margin: '0 auto'}}>
                <p style={{textAlign: 'center', textTransform: 'capitalize', fontWeight: 'bold'}}>{product.name}</p>
                <Image src={product.image.url} alt={product.name} width={500} height={500}/>
                <p>Price:</p>
                <p>{product.price.regularPrice.amount.currency} {product.price.regularPrice.amount.value},-</p>
                <Button className={buttons.root}>
                <Link href={`/categories/product/${product.sku}`} key={product.id} >
                <p>Detail</p>
                </Link>
                </Button>
                </div>
            ))}
        </div>
    )
}

export default Detail
