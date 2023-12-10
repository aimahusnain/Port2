'use client'

import { createContext, useCallback, useReducer } from "react";

const AlexioContext = createContext({
  nav: "home",
  changeNav: (value, toggleValue) => {},
  toggle: false,
});



const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
};
const { NAV, TOGGLE } = type;


const initialState = {
  nav: "home",
  toggle: false,
};


const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    default:
      return state;
  }
};


const AlexioState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);
  

  const { nav, toggle } = state;
  return (
    <AlexioContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
      }}
    >
      {children}
    </AlexioContext.Provider>
  );
};

export default AlexioState;
export { AlexioContext };
