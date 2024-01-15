import React,{useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import {ShopContext} from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon.img} alt="" />
                <img src={star_icon.img} alt="" />
                <img src={star_icon.img} alt="" />
                <img src={star_icon.img} alt="" />
                <img src={star_dull_icon.img} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-place-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-place-new">
                    ${product.new_price}
                </div>
                <div className="productdisplay-right-discription">
                    <h1>
                    dolor sit amet consectetur adipisicing elit. Corrupti, minima harum. In consequatur possimus aliquid ipsum non accusantium quisquam harum deserunt. Aut excepturi nemo odit quos dolore! Magni nihil perferendis nemo deserunt facilis impedit.

                    </h1>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XLL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className='productdisplay-right-category'><span>Category : </span>Women, T-Shirt,Crop Top</p>
                <p className='productdisplay-right-category'><span>Category : </span>Modern, Latest </p>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default ProductDisplay
