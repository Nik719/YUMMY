import React from 'react'
import NavBar from './NavBar';
import Category from './Category';
import BodyItems from './BodyItems';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

function CustomerInterface() {
  return (
    <>
        <div className="background-image" style={{color: 'white'}}>
            <div>
              <NavBar />
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl " style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', fontFamily: 'Poppins, sans-serif'}}>
                <span >Try the Tasty food. YUMMY!!</span>  
            </div>
        </div>
        <Category />
        <BodyItems />
        <Footer />
    </>
  )
}

export default CustomerInterface