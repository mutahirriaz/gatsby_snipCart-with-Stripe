import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { graphql, useStaticQuery } from 'gatsby'

const stripePromise = loadStripe("pk_test_51ID4h4CFr2HaNF8LAl2XJYQtyyWzDz0qxdXmJ9MVhRWvK7o0j7nuu8tV5yfYZAPYm424yYHVA1DaHxMNEfjFBKTu00d3prYB2B")

export default function ProductList({ location }) {

    const data = useStaticQuery(
        graphql`
            query ProductPrices {
                prices : allStripePrice {
                    edges {
                        node {
                            id
                            active
                            currency
                            unit_amount
                            product {
                                id
                                name
                                images
                                description
                            }
                        }
                    }
                }
            }   
        `
    );
    console.log('data', data)

    return (
        <div>
            Product List<br />
            <div style={{ textAlign: 'right' }} >
                <button class="snipcart-checkout" >Click here to check out</button>
                <span class="snipcart-items-count" ></span><br />
                <span class="snipcart-total-price" ></span>
            </div>

            {data.prices.edges.map((node) => {

                return (
                    <div key={node.node.id} style={{ marginTop: '30px' }} >
                        <div>ProductName: {node.node.product.name} </div>
                        <div>ProductPrice: {node.node.unit_amount}{node.node.currency}</div>
                        <div><img alt='img' src={node.node.product.images[0]} width='200px' /></div>


                        <div><button class="snipcart-add-item"
                            data-item-id={node.node.id}
                            data-item-price={node.node.unit_amount}
                            data-item-description={node.node.product.description}
                            data-item-url={`${location.origin}/products`}
                            data-item-image={node.node.product.images[0]}
                            data-item-name={node.node.product.name}
                            data-item-custom1-name="Size"
                        >Add To Cart</button></div>
                    </div>
                )
            })}
        </div>
    )
}