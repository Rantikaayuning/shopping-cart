import React, { useEffect } from 'react';
import { ButtonPrimary, ButtonCount, ButtonDelete, ButtonMove } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCartList, getUpdateCartQty, getRemoveFromCart } from '../redux/actions';

const ShoppingCart = () => {
    const cartList = useSelector(state => state.home.myCart)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCartList());
    }, [dispatch])

    const handleUpdateCartQty = async (id, quantity) => {
        dispatch(getUpdateCartQty(id, quantity))
    };

    const handleRemoveFromCart = async (lineItemId) => {
        dispatch(getRemoveFromCart(lineItemId))
    };

    return (
        <>
        <div className='title'>
            <h4><b>Shopping Cart</b></h4>
        </div>
        <div className='shopping-cart-container'>
            <div className='product-list-container'>
                {!cartList.line_items ? (
                    <div></div>
                ) : (
                <>
                <div>
                    <p>Cart ({cartList.total_items !== undefined && cartList.total_items} Items)</p>
                </div>
                {cartList !== undefined && cartList.line_items.map((item, index) => (
                <div key={index} className='cart-list' onUpdateCartQty={() => handleUpdateCartQty(item.id, item.quantity)}>
                    <div className='product-img'>
                        <img src={item.media.source} alt='product' />
                    </div>
                    <div className='product-detail'>
                        <h5>{item.name}</h5>
                        <p>
                            <span><ButtonDelete deleteText='Remove Item' handleRemove={() => handleRemoveFromCart(item.id)}/></span>{' '}
                            <span><ButtonMove moveText='Move to Wishlist' handleMove={() => handleRemoveFromCart(item.id)}/></span>
                        </p>
                    </div>
                    <div className='product-count'>
                        <div>
                            <p><ButtonCount countStatus={item.quantity} id={item.id} quantity={item.quantity} onUpdateCartQty={handleUpdateCartQty}/></p>
                            <p style={{fontSize: '10px'}}>(note, {item.quantity === 1 ? `${item.quantity} piece` : `${item.quantity} pieces`})</p>
                        </div>
                        <div>
                            <p>{item.price.formatted_with_symbol}</p>
                        </div>
                    </div>
                </div>
                ))}
                </> 
                )}
            </div>
            <div className='voucher-container'>
            <div className='total-amount-container'>
                <p><b>The total amount of</b></p>
                <div className='total-price'>
                    <p>Temporary amount</p>
                    <p>{cartList.subtotal !== undefined && cartList.subtotal.formatted_with_symbol}</p>
                </div>
                <div className='total-price'>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='total-price'>
                    <p><b>The total amount of <br/>(including VAT)</b></p>
                    <p>{cartList.subtotal !== undefined && cartList.subtotal.formatted_with_symbol}</p>
                </div>
                <p>
                    <ButtonPrimary buttonName='Go to checkout'/>
                </p>
            </div>
            <div className='total-amount-container'>
                <div className='total-price'>
                    <p>Add a discount code(optional)</p>
                    <span><i class="bi bi-chevron-down"></i></span>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default ShoppingCart;