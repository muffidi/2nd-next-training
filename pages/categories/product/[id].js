import { gql, useQuery } from '@apollo/client';
import { useRouter } from "next/router";
import { useStyles } from '@styles/style';
import Head from 'next/head';
import Image from 'next/image';
import { GET_PRODUCTS_BY_SKU } from '../schema';
import Subscribe from '@components/Subscribe';
import { Button } from '@material-ui/core';

const Product = () => {
    // const title = "category"
    const buttons = useStyles();
    const router = useRouter();
    const { id } = router.query;
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_SKU, {
        variables: {
            sku: id}
    });

    if (loading) return 'Loading...';
    if (error){ 
        return `Error! ${error.message}`;
}
    const{products}= data;
    const product = products.items
    console.log(router)

    return (
        <div style={{marginTop:'15px'}}>
            <Head>
                <title>Product</title>
                <meta name="description" content="product" />
            </Head>

            {/* <h2>{product.name}</h2> */}
            {product[0] ? (
          <div style={{padding: '20px 80px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', maxWidth: '1000px', margin: '0 auto'}}>
            <Image width='500px' height='300px' src={product[0].image?.url} alt={product[0].name} />
            <h3>{product[0].name}</h3>
            <hr/>
            <p>Price: </p>
            <p>{product[0].price.regularPrice.amount.currency} {product[0].price.regularPrice.amount.value}</p>
            <Button className={buttons.root}>Add To Cart</Button>
            <p>Description: 
              <span dangerouslySetInnerHTML={{ __html: product[0].description.html }} />
            </p>
              <p style={{marginTop: '20px', fontWeight: 'bold'}}>Subscribe to our newsletter for an update.</p>
            <Subscribe />
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
    )
        }


export default Product;