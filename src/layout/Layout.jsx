import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - clientes
        </h2>

        <nav className="mt-10">
          <Link
            to="/clientes"
            className={`${
              pathname === '/clientes' ? 'text-blue-300' : 'text-white'
            } text-white text-2xl block mt-2 hover:text-blue-300`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'
            } text-white text-2xl block mt-2 hover:text-blue-300`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10">
        <Outlet />
      </div>
    </div>
  );
};
