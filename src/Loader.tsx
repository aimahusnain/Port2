'use client'

import React, { useEffect, useState } from 'react';
import Preloader from './Preloader';

function Loader({ children }) {
  const [load, setLoad] = useState(false);
  const [load1, setLoad1] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad1(true);
    }, 1000);
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  }, []);

  return (
    <>
      {!load && <Preloader />}
      {load1 && children}
    </>
  );
}

export default Loader;
