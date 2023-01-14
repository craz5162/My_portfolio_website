import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from '../Main/Main';

const Headers = () => {
      return (
            <div>
                  <Main></Main>
                  <Outlet></Outlet>
            </div>
      );
};

export default Headers;