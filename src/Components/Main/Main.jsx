import React from 'react'
import './main.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


const Data = [
  {
    id: 1,
    imgSrc: img10,
    destTitle: "Bora Bora",
    location: "New Zeland",
    grade: 'CULTURAL RELAX',
    fees: '700$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Great barrier reef",
    location: "Australia",
    grade: 'CULTURAL RELAX',
    fees: '700$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "cppodacio",
    location: "Turkey",
    grade: 'CULTURAL RELAX',
    fees: '840$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Guanajuato",
    location: "Maxico",
    grade: 'CULTURAL RELAX',
    fees: '1100$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 5,
    imgSrc: img8,
    destTitle: "Chinque Terre",
    location: "Itlay",
    grade: 'CULTURAL RELAX',
    fees: '840$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: 'CULTURAL RELAX',
    fees: '600$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Mat",
    location: "Combodia",
    grade: 'CULTURAL RELAX',
    fees: '790$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 8,
    imgSrc: img5,
    destTitle: "Taj Mahal",
    location: "India",
    grade: 'CULTURAL RELAX',
    fees: '900$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: 'CULTURAL RELAX',
    fees: '500$',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam a qui, perferendis id quae recusandae nostrum harum possimus enim laboriosam, maxime odit ad optio modi dolor quod error eos',
  },
 
];
const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className='title'>
          Most visited destination
        </h3>
      </div>

      <div className='secContent grid'>

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className='singleDestination' >

                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Details<HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section >
  )
}

export default Main