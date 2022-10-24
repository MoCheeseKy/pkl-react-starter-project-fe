import React from 'react'
import './library.scss'
import { Link } from 'react-router-dom'

export default function Library() {
  return (
    <div className='library'>
        <div className="header">
            <button aria-label='share'>
                <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24" class="sc-gKsewC iPWGYb">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill="currentColor"></path>
                </svg>
            </button>
        </div>
        <div className="main">
            <div className="image">
                <img src="https://d1fdloi71mui9q.cloudfront.net/gzuXKDGgR9qKLDW78JAT_cj3agsTxNIrX5xm9" alt="" />
            </div>
            <div className="at">
                <h1>@library_iblam</h1>
            </div>
            <div className="second">
                <h2>OPAC ( Online Public Access Catalogue ) IBLAM</h2>
            </div>
            <div className="links">
                <div className="link1">
                    <Link><p>LIBRARY IBLAM</p></Link>
                </div>
                <div className="link2">
                    <Link><p>DIGILIB IBLAM</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
