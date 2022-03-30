import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from './types/product'

type Product = {
  products: ProductType[],
  onRemove: (id: string) => void
}

const ProductPage = ({products, onRemove}: Product) => {

  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Price</th>
            <th> <NavLink to="add">Add</NavLink></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onRemove(item._id)}>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductPage