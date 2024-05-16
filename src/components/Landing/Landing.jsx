
import React from 'react'
import Carousel from './Carousel'
import ItemListContainer from '../ItemListContainer'

function Landing() {
    return (
        <div className='row'>
            <div className='col-12'>
                <Carousel />
            </div>
            <div className='col-12'>
                <ItemListContainer />
            </div>
        </div>

    )
}

export default Landing