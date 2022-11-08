import { faker } from '@faker-js/faker';


    const productList=[...Array(16)].map(()=>{
        return({
            id:faker.datatype.uuid(5),
            name:faker.commerce.productName(),
            imgUrl:faker.image.fashion(1234, 2345, true),
            price:faker.commerce.price(100, 3000, 0, '₹'),
            rating:faker.datatype.bigInt({ min: 1, max: 5 }),
            numberOfRatings:faker.datatype.bigInt({ min: 10, max: 100 }),
        })
    })

    const brandList=[...Array(4)].map(()=>{
        return({
            brandName:faker.company.name(),
        })
    })

    export const data ={brands:[...brandList],products:[...productList]};
