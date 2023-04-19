import React from 'react';
import { StyledStatus } from './OrderStatus';

export const OrderStatus = (props) => {
  const {status} = props
    {switch(status){
      case "ok":
        return <StyledStatus img="https://res.cloudinary.com/dhnicvwkw/image/upload/v1681873206/check_oivdcx.png"></StyledStatus>
      case "pending":
        return <StyledStatus img="https://res.cloudinary.com/dhnicvwkw/image/upload/v1681873288/delay_hi5rd6.png"></StyledStatus>
      case "cancel":
        return <StyledStatus img="https://res.cloudinary.com/dhnicvwkw/image/upload/v1681873301/multiply_ld5lkb.png"></StyledStatus>
      default: 
        return <div></div>
    }}
}

