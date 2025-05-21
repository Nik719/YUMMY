import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
import bevaCate from '../../assets/bevaragesCate.jpg';
import breakfastCate from '../../assets/breakfastCate.jpg';
import indianCate from '../../assets/indianCate.jpg';
import chineseCate from '../../assets/chineseCate.jpg';
import dinnerCate from '../../assets/dinnerCate.jpg';
import fastFoodCate from '../../assets/fastFoodCate.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Category.css';

function Category() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  const categoryImages = [
    { src: bevaCate, text: 'Beverages' },
    { src: breakfastCate, text: 'Breakfast' },
    { src: indianCate, text: 'Lunch' },
    { src: chineseCate, text: 'Chinese' },
    { src: dinnerCate, text: 'Dinner' },
    { src: fastFoodCate, text: 'Fast Food' },
  ];

  return (
    <>
      <Container className="category-carousel-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carousel-item-padding"
          containerClass="carousel-container"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {categoryImages.map((item, index) => (
            <div key={index} className="category-item">
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                roundedCircle
                className="category-image"
              />
              <div className="category-text">{item.text}</div>
            </div>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

// Custom arrow components with better positioning
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous Item"
    className="custom-arrow custom-left-arrow"
  >
    <i className="fa fa-chevron-left" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next Item"
    className="custom-arrow custom-right-arrow"
  >
    <i className="fa fa-chevron-right" />
  </button>
);

export default Category;
