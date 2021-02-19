import { gql } from '@apollo/client';


export const productQuery=gql`
query{
  allProducts{
    id
    title
    product_type
    price_range
    quantity
    category{
      id
    }
    productVariant{
      image{
        publicUrl
      }
    }
  }
}
`;

export const allCategoriesName=gql`

query{
  allCategories{
    title
    
  }
}
`;

export const createProduct=gql`
mutation CreateProduct($data:ProductCreateInput){
  createProduct(data:$data){
    title
    id
    
  }
}

`;

export const createCategory=gql`
mutation CreateCategory($data:CategoryCreateInput){
  createCategory(data:$data){
   title
   description
 }
}
`;

export const updateProduct=gql`
mutation UpdateProduct($id:ID!, $data:ProductUpdateInput){
  updateProduct(id:$id, data:$data){
    title
    
  }
}
`;



