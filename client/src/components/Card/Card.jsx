import React from 'react'
import './card.css'
import {BiLike} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'

const Card = () => {
  return (
    <div className='card'>
      <div className='img'>
        <img src='https://picsum.photos/100/100' alt='Img' />
      </div>

      <div className='infos'>
        <div className='name'>
          <h2>Joe Doe</h2>
          <h4>@Dino Coder</h4>
        </div>

        <p className='text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          doloribus harum, quo officiis sequi temporibus alias neque architecto
          praesentium dolores ullam aut vero consequatur eius?
        </p>

        <ul className='stats'>
          <li>
            <h3>15K</h3> <BiLike />{' '}
          </li>
          <li>
            <h3>10</h3> <MdOutlineWorkOutline />{' '}
          </li>
          <li>c</li>
        </ul>

        <div className='links'>
          <button>ncippy</button>
        </div>
      </div>
    </div>
  )
}

export default Card