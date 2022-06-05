import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    {
        categories(filters:{}) {
            items {
                name
                id
            }
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query getCategories($categoryId: Int) {
        category(id: $categoryId) {
            name
            id
            products{
                items{
                  id
                  name
                  sku
                  image{
                    url
                  }
                  price {
                    regularPrice {
                      amount {
                        currency
                        value
                      }
                    }
                  }
                  
                }
            }
        }
    }
`;

export const GET_PRODUCTS_BY_SKU = gql`
query getProducts($sku: String){
    products(filter: { sku: { eq: $sku } }){
        items{
          name
          sku
          image{
            url
          }
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          description{
              html
          }
        }
    }
}
`;

export const POST_SUBSCRIBE = gql`
    mutation emailSubscribe($email: String!) {
        subscribe(input: {email: $email}) {
            status {
                code
                message
                response
            }
        }
    }
`;