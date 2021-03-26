import React from 'react';

export const ButtonPrimary = (props) => {
  const {buttonName, handleClick} = props;
  return (
    <div class="d-grid gap-2">
      <button type="button" class="btn btn-primary" onClick={handleClick}>
        {buttonName}
      </button>
    </div>
  );
}

export const ButtonCount = (props) => {
  const {countStatus, onUpdateCartQty, id, quantity} = props;
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
  return (
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button type="button" class="btn btn-outline-secondary" onClick={() => handleUpdateCartQty(id, quantity - 1)}>-</button>
      <button type="button" class="btn btn-outline-secondary">&nbsp;{countStatus}&nbsp;</button>
      <button type="button" class="btn btn-outline-secondary" onClick={() => handleUpdateCartQty(id, quantity + 1)}>+</button>
    </div>
  );
}

export const ButtonDelete = (props) => {
  const {deleteText, handleRemove, lineItemId} = props;
  const handleRemoveFromCart = (lineItemId) => handleRemove(lineItemId);
  return (
    <>
      <span onClick={() => handleRemoveFromCart(lineItemId)}>{deleteText}</span>{' '}
      <span><i class="bi bi-trash-fill" onClick={() => handleRemoveFromCart(lineItemId)}/></span>
    </>
  );
}

export const ButtonMove = (props) => {
  const {moveText, handleMove} = props;
  return (
    <>
      <span onClick={handleMove}>{moveText}</span>{' '}
      <span><i class="bi bi-heart-fill" onClick={handleMove}></i></span>
    </>
  );
}

export const ButtonAdd = (props) => {
  const {handleClick, id } = props;
  return (
    <i class="bi bi-cart-plus"  onClick={() =>  handleClick(id, 1)}></i>
  );
}