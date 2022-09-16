import React from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'


const Coins = (props) => {

  return (
    <div className='container'>
        <div className='heading'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {props.coins.map(coins => {
            return (
                <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                    <CoinItem coins={coins} key={coins.id}/>
                </Link>
            )
        })}
    </div>
  )
}

export default Coins