import { faker } from '@faker-js/faker';


    

    const brandList=[...Array(4)].map(()=> ({brand:faker.company.name()}));


    const productList=[...Array(16)].map(()=>{
        return({
            id:faker.datatype.uuid(5),
            name:faker.commerce.productName(),
            brand:brandList[Math.floor(Math.random()*brandList.length)].brand,
            imgUrl:faker.image.fashion(720, 1280, true),
            price:Math.ceil(Number(faker.commerce.price(100, 3000, 0))/10)*10,
            rating: String(faker.datatype.bigInt({ min: 1, max: 5 })),
            numberOfRatings:Number(faker.datatype.bigInt({ min: 10, max: 100 })),
        })
    })

    export const data ={brands:[...brandList],products:[...productList]};
