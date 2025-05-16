import React from 'react';
import { assets } from '../assets/assets';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { id: 1, name: 'John Doe', review: 'Great service and easy booking!', rating: 5 },
  { id: 2, name: 'Jane Smith', review: 'Highly professional doctors. Very satisfied.', rating: 4 },
  { id: 3, name: 'Michael Lee', review: 'Smooth appointment process. Loved it!', rating: 5 },
  { id: 4, name: 'Emily Davis', review: 'Helpful staff and quick response!', rating: 4 },
  { id: 5, name: 'David Wilson', review: 'Efficient and user-friendly interface.', rating: 5 },
];

const Footer = () => {
  return (
    <div className='md:mx-10'>

      {/* Footer Section */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img style={{ width: '100px', height: '70px' }} className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>mediconnect@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
