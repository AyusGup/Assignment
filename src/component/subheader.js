import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheck, faInfo } from '@fortawesome/free-solid-svg-icons';
import './subheader.scss'; // Import your SCSS file

const Header = () => {
  return (
    <div className="sub">
       <div className='head'>Best Website Builders in US</div>
       <hr className='border-t-2 border-black my-2'></hr>
       <div className='middle'>
        <p>
         <p className='flex justify-center items-center px-1 border-2 border-[#727D87] rounded-full max-w-6 max-h-7'><FontAwesomeIcon icon={faCheck} className='text-sm' /></p>
         Last Updated - Feburary 22, 2020
        </p>
        <p className='pl-6'>
        <p className='flex justify-center items-center px-2 border-2 border-[#727D87] rounded-full max-w-6 max-h-7'><FontAwesomeIcon icon={faInfo} className='text-sm' /></p>
         Advertising Disclosure
        </p>
        <select name="country" id="country" class="links bg-black">
        <option value="Top Relevant">Top Relevant</option>
        <option value="Highest Rated">Highest Rated</option>
        </select>
       </div>
       <hr></hr>
       <div className='flex flex-wrap w-full space-x-4 mb-4'>
         <button>Tools</button>
         <button>AWS Builder</button>
         <button>Start Build</button>
         <button>Build Supplies</button>
         <button>Tooling</button>
         <button>BlueHosting</button>
      </div>
      <div className='bottom space-x-2 flex flex-wrap'>
          <p>Home</p>
          <p><FontAwesomeIcon icon={faAngleRight} className='vector' /></p>
          <p>Hosting for all</p>
          <p><FontAwesomeIcon icon={faAngleRight} className='vector' /></p>
          <p>Hosting</p>
          <p><FontAwesomeIcon icon={faAngleRight} className='vector' /></p>
          <p>Hosting6</p>
          <p><FontAwesomeIcon icon={faAngleRight} className='vector' /></p>
          <p>Hosting5</p>
       </div>
    </div>
  );
};

export default Header;
