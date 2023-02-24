import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const useRedirect = redirectTo => {
  const {currentUser} = useSelector(state => state.user);
  
  const navigate = useNavigate();

  useEffect(()=>{
    if (currentUser) {
      navigate(redirectTo)
    }
  },[currentUser, navigate, redirectTo])

}