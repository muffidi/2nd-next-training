import { gql, useQuery } from '@apollo/client';
import { Button } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { GET_CATEGORIES } from '../../components/schema';
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const Categories = () => {
    // const title = "category"
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return (
        <div style={{padding: '0 20px'}}>
            <h2 style={{textAlign: 'center'}}>Category List</h2>
            <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(4, 1fr)'}}>
            {
            Array.from(new Array(16)).map((index) =>(
                <div key={index}>
                    <Skeleton variant="rect" width={300} height={86.5} />                                    
                </div>
            ))
            }
            </div>
        </div>
    );
    if (error){ 
        return `Error! ${error.message}`;
}
    console.log(data)

    return (
        <div>
            <Head>
                <title>Category List</title>
                <meta name="description" content="Cat List" />
            </Head>

            <h2 style={{textAlign: 'center'}}>Category List</h2>
            <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(4, 1fr)'}}>
            {data.categories.items.map(category => (
                <Button key={category.id} style={{padding: '16px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', width: '300px', margin: '0 auto'}}>
                <Link key={category.id} href={`/categories/${category.id}`}>
                <p>{category.name}</p>
                </Link>
                </Button>
            ))}
            </div>
        </div>
    )
        }


export default Categories;