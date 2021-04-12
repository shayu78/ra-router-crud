import React from 'react'
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div className="container__404">
      <h1 className="header__404">404</h1>
      <p className="text__404">Page not found</p>
      <Link className='main__404__link' to={'/'}>Main Page</Link>
    </div>
  )
}
