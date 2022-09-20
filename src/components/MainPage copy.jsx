import React from 'react'
import ProductFrom from '../components/ProductFrom'
import ProductList from '../components/ProductList'
import './MainPage.css'

function List({ list }) {
  return (
    <li>
      {list.productID}<br/>
      {list.name}<br/>
      {list.Produce}<br/>
      {list.registration}<br/>
      {list.detail}<br/>
      {list.manager}<br/>
    </li>
  )
}

export default function MainPage() {

  // id = 4

  
  const lists = [
      {
        id: 0,
        productID: 'BPSOLUTION01',
        name: '제품명01',
        Produce: '2022-09-01',
        registration: '2022-09-01',
        detail: '상세설명',
        manager: '홍길동'
      },
      {
        id: 1,
        productID: 'BPSOLUTION02',
        name: '제품명02',
        Produce: '2022-09-02',
        registration: '2022-09-02',
        detail: '상세설명',
        manager: '홍길동'
      },
      {
        id: 2,
        productID: 'BPSOLUTION03',
        name: '제품명03',
        Produce: '2022-09-03',
        registration: '2022-09-03',
        detail: '상세설명',
        manager: '홍길동'
      },
      {
        id: 3,
        productID: 'BPSOLUTION04',
        name: '제품명04',
        Produce: '2022-09-04',
        registration: '2022-09-04',
        detail: '상세설명',
        manager: '홍길동'
      },
    ]
  


  return (
    <div className='wrap'>
      <h1 className='listTitle'>제품 리스트</h1>
      <button className='newBtn'
      // onClick={handleNewProduct}
      >신규</button>
      <section className='listOuter'>
        {/* <ProductList /> */}
        <ul className='product_list'>
          {
            lists.map((value, i) => {
              return (
                <li>
                  <ul className='info_list'>
                    <li>
                      <div className='title'>제품ID : </div>
                      <div>{value.productID}</div>
                    </li>
                    <li>
                      <div className='title'>제품명 : </div>
                      <div>{value.name}</div>
                    </li>
                    <li>
                      <div className='title'>제조일자 : </div>
                      <div>{value.Produce}</div>
                    </li>
                    <li>
                      <div className='title'>등록일자 : </div>
                      <div>{value.registration}</div>
                    </li>
                    <li>
                      <div className='title'>상세설명 : </div>
                      <div>{value.detail}</div>
                    </li>
                    <li>
                      <div className='title'>등록자 : </div>
                      <div>{value.manager}</div>
                    </li>
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  )
}
