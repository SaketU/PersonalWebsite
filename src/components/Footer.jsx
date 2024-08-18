import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-800 w-full flex justify-center items-center py-6">
      <p className="text-white text-center">
        Copyright &copy; {new Date().getFullYear()} Saket Upperla
      </p>
    </div>
  );
};

export default Footer;