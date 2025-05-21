import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { FaShoppingCart } from 'react-icons/fa';
import './BodyItems.css'; // We'll create this file for custom styling

function BodyItems() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; 

    useEffect(() => {
      scrollToTheMenu();
    }, [currentPage]);
    
    const scrollToTheMenu = () =>{
        document.getElementById('menuStart').scrollIntoView({ behavior: 'smooth' });
    }

        const foodItemsCards = [      
            {
                "item_image": '/ItemImages/vegSpringRoll.jpeg',
                "item_name": "Veg Spring Rolls",
                "description": "Enjoy the crunch and flavor of these crispy fried rolls stuffed with a medley of finely chopped vegetables and served with a sweet and sour dipping sauce",
                "price": 120
            },
            {
                "item_image": '/ItemImages/chickenLollipop.jpeg',
                "item_name": "Chicken Lollipop",
                "description": "Indulge in these spicy and succulent chicken wings marinated in a tangy sauce and deep-fried to perfection",
                "price": 150
            },
            {
                "item_image": '/ItemImages/cheesyGarlicBread.jpeg',
                "item_name": "Cheese Garlic Bread",
                "description": "Savor the aroma and taste of these toasted bread slices topped with melted cheese and garlic butter, sprinkled with oregano and parsley",
                "price": 100
            },
            {
                "item_image": '/ItemImages/potatoWedges.jpeg',
                "item_name": "Potato Wedges",
                "description": "Relish these deep-fried potato wedges seasoned with salt and pepper, accompanied by a creamy mayonnaise dip",
                "price": 80
            },
            {
                "item_image": '/ItemImages/vegBiryani.jpeg',
                "item_name": "Veg Biryani",
                "description": "Experience the aroma and flavor of this fragrant rice dish cooked with vegetables and spices, served with raita and pickle",
                "price": 200
            },
            {
                "item_image": '/ItemImages/chickenBiryani.jpeg',
                "item_name": "Chicken Biryani",
                "description": "Savor the taste of this flavorful rice dish cooked with chicken and spices, served with raita and pickle",
                "price": 250
            },
            {
                "item_image": '/ItemImages/paneerButterMasala.jpeg',
                "item_name": "Paneer Butter Masala",
                "description": "Relish this rich and creamy curry with cottage cheese and butter, simmered in a tomato-based gravy, served with naan or roti",
                "price": 220
            },
            {
                "item_image": '/ItemImages/butterChicken.jpeg',
                "item_name": "Butter Chicken",
                "description": "Indulge in this popular and creamy curry with chicken and butter, cooked in a tomato-based gravy, served with naan or roti",
                "price": 260
            },
            {
                "item_image": '/ItemImages/vegPizza.jpeg',
                "item_name": "Veg Pizza",
                "description": "Enjoy this thin crust pizza with cheese and vegetable toppings, baked in a wood-fired oven, served with ketchup and oregano",
                "price": 300
            },
            {
                "item_image": '/ItemImages/chickenPizza.jpeg',
                "item_name": "Chicken Pizza",
                "description": "Delight in this thin crust pizza with cheese and chicken toppings, baked in a wood-fired oven, served with ketchup and oregano",
                "price": 350
            },
            {
                "item_image": '/ItemImages/vegNoodles.jpeg',
                "item_name": "Veg Noodles",
                "description": "Have fun with this stir-fried noodle dish with vegetables and soy sauce, tossed with sesame seeds and spring onions",
                "price": 180
            },
            {
                "item_image": '/ItemImages/chickenNoodles.jpeg',
                "item_name": "Chicken Noodles",
                "description": "Love this stir-fried noodle dish with chicken and soy sauce, tossed with sesame seeds and spring onions",
                "price": 200
            },
            {
                "item_image": '/ItemImages/vegBurgers.jpeg',
                "item_name": "Veg Burger",
                "description": "Bite into this tasty burger with a vegetable patty, lettuce, tomato, and cheese, sandwiched between toasted buns, served with fries and coleslaw",
                "price": 150
            },
            {
                "item_image": '/ItemImages/chickenBurgers.jpeg',
                "item_name": "Chicken Burger",
                "description": "Enjoy this juicy burger with a chicken patty, lettuce, tomato, and cheese, sandwiched between toasted buns, served with fries and coleslaw",
                "price": 180
            }
        ];

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = foodItemsCards.slice(indexOfFirstItem, indexOfLastItem);
        const totalPagination = Math.ceil(foodItemsCards.length / itemsPerPage);
        console.log(totalPagination);

        const paginate = (pageNumber)=> {
            setCurrentPage(pageNumber);
        }


  return (
    <div className="food-menu-section">
      <h2 id='menuStart' className='menu-title'>Order food right away</h2>
      
      <div className='food-grid'>
        {currentItems.map((item, index) => (
          <Card key={index} className="food-card">
            <div className="card-img-container">
              <Card.Img variant="top" src={`${item.item_image}`} className="food-card-img" />
              <div className="price-tag">₹{item.price}</div>
            </div>
            <Card.Body className="food-card-body">
              <Card.Title className="food-title">{item.item_name}</Card.Title>
              <Card.Text className="food-description">
                {item.description}
              </Card.Text>
              <Button variant="primary" className="add-to-cart-btn">
                <FaShoppingCart className="cart-icon" /> Add To Platter
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      
      <div className='pagination-container'>
        <Pagination className='modern-pagination'>
          <Pagination.First 
            onClick={() => paginate(1)} 
            disabled={currentPage === 1}
          />
          <Pagination.Prev 
            onClick={() => paginate(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Prev
          </Pagination.Prev>
          
          {/* Show page numbers */}
          {[...Array(totalPagination)].map((_, index) => (
            <Pagination.Item 
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          
          <Pagination.Next 
            onClick={() => paginate(currentPage + 1)} 
            disabled={currentPage === totalPagination}
          >
            Next
          </Pagination.Next>
          <Pagination.Last 
            onClick={() => paginate(totalPagination)} 
            disabled={currentPage === totalPagination}
          />
        </Pagination>
      </div>
    </div>
  )
}

export default BodyItems