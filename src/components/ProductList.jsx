import React from 'react'
import ProductInfo from './ProductInfo'

export default function ProductList() {

  const { data, onUpdate } = this.props

  const list = data.map(
    info => (
      <ProductInfo
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      />
    )
  )
  return (
    <div>{list}</div>
  )
}
