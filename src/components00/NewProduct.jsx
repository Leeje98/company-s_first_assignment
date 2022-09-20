import React from 'react'

export default function NewProduct() {
  return (
    <form onSubmit={this.handleSubmit}>
      제품ID : 
      <input
        name='productID'
        onChange={this.handleChange} 
        value={this.state.pdID}
        // ref={productID}
      />
    </form>
  )
}


/// 사용X