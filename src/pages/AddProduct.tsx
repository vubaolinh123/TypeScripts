import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate } from "react-router-dom"
import { ProductType } from './types/product'

type ProductAddProps = {
  onAdd: (props: ProductType) => void
}

type FormInputs = {
  name: string,
  price: number
}

const AddProduct = (props: ProductType) => {
  const {register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormInputs> = data =>{
       props.onAdd(data);
        navigate('/product')
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" {...register('name', {required: true})}/>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" {...register('price')}/>
                </div>
                <button>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct