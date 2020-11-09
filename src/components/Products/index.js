import React from 'react'
import {ProductButton,
    ProductCard,
    ProductDesc,
    ProductHeading,
    ProductWrapper,
    ProductImg,
    ProductInfo,
    ProductPrice,
    ProductTitle,
ProductsContainer}from './ProductElements'
const Products = (heading,data) => {
    return (
        <div>
            <ProductsContainer>
                <ProductHeading>{heading}</ProductHeading>
                <ProductWrapper>
                    {data.map((product,index)=>{
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt} />
                                <ProductInfo>
                                    <ProductTitle>{product.name}</ProductTitle>
                                    <ProductDesc>{product.desc}</ProductDesc>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductButton>{product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })}
                </ProductWrapper>
            </ProductsContainer>
        </div>
    )
}

export default Products
