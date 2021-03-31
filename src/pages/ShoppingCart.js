import React, { useEffect, useState } from "react";
import {
  ButtonPrimary,
  ButtonCount,
  ButtonDelete,
  ButtonMove
} from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartList,
  getUpdateCartQty,
  getRemoveFromCart
} from "../redux/actions";

const ShoppingCart = () => {
  const [discount, setDiscount] = useState(false);
  const { myCart } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartList());
  }, [dispatch]);

  const handleUpdateCartQty = (id, quantity) => {
    dispatch(getUpdateCartQty(id, quantity));
  };

  const handleRemoveFromCart = (lineItemId) => {
    dispatch(getRemoveFromCart(lineItemId));
  };

  const handleDiscount = () => {
    setDiscount(!discount);
  };

  return (
    <>
      <div className="title">
        <h4>
          <b>Shopping Cart</b>
        </h4>
      </div>
      <div className="shopping-cart-container">
        <div className="product-list-container">
          {!myCart.line_items ? (
            <div>Loading...</div>
          ) : (
            <>
              <div>
                <p>
                  Cart ({myCart.total_items !== undefined && myCart.total_items}{" "}
                  Items)
                </p>
              </div>
              {myCart !== undefined &&
                myCart.line_items.map((item, index) => (
                  <div key={index} className="cart-list">
                    <div className="product-img">
                      <img src={item.media.source} alt="product" />
                    </div>
                    <div className="product-detail">
                      <h5>{item.name}</h5>
                      <p style={{ color: "grey" }}>
                        <span>
                          <ButtonDelete
                            deleteText="Remove Item"
                            handleRemove={() => handleRemoveFromCart(item.id)}
                          />
                        </span>{" "}
                        <span>
                          <ButtonMove
                            moveText="Move to Wishlist"
                            handleMove={() => handleRemoveFromCart(item.id)}
                          />
                        </span>
                      </p>
                    </div>
                    <div className="product-count">
                      <div>
                        <p>
                          <ButtonCount
                            countStatus={item.quantity}
                            id={item.id}
                            quantity={item.quantity}
                            onUpdateCartQty={handleUpdateCartQty}
                          />
                        </p>
                        <p style={{ fontSize: "10px" }}>
                          (note,{" "}
                          {item.quantity === 1
                            ? `${item.quantity} piece`
                            : `${item.quantity} pieces`}
                          )
                        </p>
                      </div>
                      <div>
                        <p>IDR {item.price.raw}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <div className="voucher-container">
          <div className="total-amount-container">
            <p>
              <b>The total amount of</b>
            </p>
            <div className="total-price">
              <p>Temporary amount</p>
              <p>IDR {myCart.subtotal !== undefined && myCart.subtotal.raw}</p>
            </div>
            <div className="total-price">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-price">
              <p>
                <b>
                  The total amount of <br />
                  (including VAT)
                </b>
              </p>
              <p>IDR {myCart.subtotal !== undefined && myCart.subtotal.raw}</p>
            </div>
            <p>
              <ButtonPrimary buttonName="Go to checkout" />
            </p>
          </div>
          <div className="total-amount-container">
            <div className="total-price">
              <p>Add a discount code (optional)</p>
              <span>
                <i class="bi bi-chevron-down" onClick={handleDiscount}></i>
              </span>
            </div>
            {discount === false ? (
              <></>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Enter discount code..."
                  style={{
                    width: "100%",
                    height: "30px",
                    border: "1px solid grey"
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
