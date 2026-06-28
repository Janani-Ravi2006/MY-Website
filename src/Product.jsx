import React,{useState} from 'react';
import './Product.css';
let p = [
  {
    id: 1,
    name: "Fridge",
    price: 15000
  },
  {
    id: 2,
    name: "TV",
    price: 30000
  },
  {
    id: 3,
    name: "Table",
    price: 10000
  },
  {
    id: 4,
    name: "Laptop",
    price: 65000
  },
  {
    id: 5,
    name: "Mobile",
    price: 25000
  },
  {
    id: 6,
    name: "Washing Machine",
    price: 22000
  },
  {
    id: 7,
    name: "Air Conditioner",
    price: 42000
  },
  {
    id: 8,
    name: "Microwave Oven",
    price: 12000
  },
  {
    id: 9,
    name: "Study Table",
    price: 25000
  },
  {
    id: 10,
    name: "AirPhone",
    price: 22000
  },
  {
    id: 11,
    name: "Watch",
    price: 42000
  },
  {
    id: 12,
    name: "Bangle",
    price: 12000
  }
];
function Product(){
    const [notification,setNotification]=useState(false);
    const[notification1,setNotification1]=useState(false);
    const[cart,setCart]=useState([]);
    const handleSubmit=(index)=>{
         setCart([...cart,p[index-1]])
         setNotification(true);
         setTimeout(()=>{
            setNotification(false);
        },2000);
    };
    const handleRemove=(index)=>{
         setCart(cart.filter((_, i)=>i!==index));
        setNotification1(true);
         setTimeout(()=>{
            setNotification1(false);
        },2000);
    }
    return(
      <div className="hero1">
        <h1>Product Details</h1>
        <div className="product-content">
            {p.map((p1)=>(
                <div className="card1" key={p1.id}>
                 <h1>{p1.name}</h1>
                 <p>{p1.price}</p>               
                 <button onClick={()=>handleSubmit(p1.id)}>Buy Now</button>
                </div>
            ))}
        </div>
        {notification && 
                <div className="noti">
                  <p>Successfully Added</p>
                </div>

            }

      <h1>Cart</h1>
      <div className="product-content">
            {cart.map((p1,index)=>(
                <div className="card1" key={p1.id}>
                 <h1>{p1.name}</h1>
                 <p>{p1.price}</p>               
                 <button onClick={()=>handleRemove(index)}>Remove</button>
                </div>
            ))}
        </div>
          {notification1 && 
                <div className="noti">
                  <p>Delete Successfully</p>
                </div>

            }
      </div>
    );
}
export default Product;