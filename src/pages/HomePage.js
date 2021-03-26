import React, { useEffect} from 'react';
import { ButtonAdd } from '../components/Button';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, handleAddToCart } from '../redux/actions';

const ShoppingCart = () => {
  const { productsList } = useSelector(state => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])

  const handleAdd = (productId, quantity) => {
    dispatch(handleAddToCart(productId, quantity))
  }
  
  return (
      <div>
          <h4 className='title'><b>Choose your style</b></h4>
          <div className='shopping-cart-container'>
            <div class="row" >
              {productsList.map((item, index) => (
              <div class="col-sm-4" >
                <Card key={index} cardPhoto={item.media.source} cardText={item.name} cardButton={<ButtonAdd handleClick={handleAdd} id={item.id} handleUpdateCartQty/>}/>
              </div>
              ))}
            </div>
          </div>
      </div>
  )
}

export default ShoppingCart
