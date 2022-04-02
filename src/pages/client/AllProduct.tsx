import React from 'react'
import Products from '../../components/Product/Products'
import Slider from '../../components/Slider/Slider'



type Props = {}

const AllProduct = (props: Props) => {
    return (
        <>
            <Slider />
            <Products />
        </>
    )
}

export default AllProduct