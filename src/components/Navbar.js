import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/weblogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { getCartList } from '../redux/actions'

function Navbar() {
    const {myCart}= useSelector(state => state.home)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartList());
    }, [dispatch])

    return (
        <nav class="navbar navbar-light" style={{backgroundColor: 'rgb(141, 169, 189)'}}>
        <div class="container-fluid">
            <Link to='/'>
                <img src={logo} alt='' width="30" height="28" class="d-inline-block align-text-top"/>
            </Link>
            <Link to='/my-cart' style={{color: 'black', textDecoration: 'none'}}>
                <button type="button" class="btn btn-outline-secondary">
                <i class="bi bi-bag-fill"></i>
                <span class="badge">{myCart.total_items}</span>
                </button>
            </Link>
        </div>
        </nav>
    )
}

export default Navbar;