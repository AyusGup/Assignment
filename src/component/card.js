import React from 'react';
import './card.scss'; // Import the SCSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTrophy, faGem, faStar } from '@fortawesome/free-solid-svg-icons';
const url = "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"

const Card = ({ product }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-col justify-center items-center w-[70%]'>
    <div className='w-[100%] mb-[-60px] z-50 bg-transparent'>
        <p className='bg-[#FF7724] p-2 w-fit border rounded-r-lg text-[#FFFFFF] '>
        <FontAwesomeIcon icon={faTrophy} className='pr-2 bg-transparent' />
          Best Choice
        </p>
        <p className='flex justify-center ml-[-20px] border rounded-full p-2 w-10 mt-2 bg-[#FFFFFF] text-[#626E79] border-[#E1E4E6]'>1</p>
    </div>
    <div className="card">
      <div className="card-image">
        <img src={url} alt="#" />
        <p>Builder 1</p>
      </div>
      <div className="card-details">
        <p>
          <h3>WixPro 72-Inch Responsive Website Builder-</h3>
          <p>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Blue/ Black)</p>
        </p>

        <p>
          <h3>Main highlights</h3>
          <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
        </p>

        <a>
          Show more
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>
      <div className="rating-card">
        <div className='rate'>
            <h1>9.8</h1>
            <p>Exceptional</p>
            <div>
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
            </div>
        </div>
        <button>View</button>
      </div>
    </div>
    </div>

    <div className='flex flex-col justify-center items-center w-[70%]'>
    <div className='w-[100%] mb-[-60px] z-10 bg-transparent'>
        <p className='bg-[#FF7724] p-2 w-fit border rounded-r-lg text-[#FFFFFF]'>
          <FontAwesomeIcon icon={faGem} className='pr-2 bg-transparent' />
          Best Value
        </p>
        <p className='flex justify-center ml-[-20px] border rounded-full p-2 w-10 mt-2 bg-[#FFFFFF] text-[#626E79] border-[#E1E4E6]'>2</p>
    </div>
    <div className="card">
      <div className="card-image">
        <img src={url} alt="#" />
        <p>Builder</p>
      </div>
      <div className="card-details">
        <p>
          <p>
            <h3>SiteCraft 68-Inch Ultimate Web Design Studio-</h3>
            <p>Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
          </p>

          <p>
            <h3>Main highlights</h3>
            <p>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
          </p>
        </p>
        <a>
          Show more
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>
      <div className="rating-card">
        <div className='rate'>
        <h1>9.5</h1>
            <p>Excellent</p>
            <div>
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
            </div>
        </div>
        <button>View</button>
      </div>
    </div>
    </div>

    <div className='flex flex-col justify-center items-center w-[70%]'>
    <div className='w-[100%] mb-[-60px] z-10 bg-transparent'>
        <p className='flex justify-center ml-[-20px] border rounded-full p-2 w-10 mt-2 bg-[#FFFFFF] text-[#626E79] border-[#E1E4E6]'>3</p>
    </div>
    <div className="card">
      <div className="card-image">
        <img src={url} alt="#" />
        <p>Builder 1</p>
      </div>
      <div className="card-details">
        <p>
          <p>
            <h3>WixPro 72-Inch Responsive Website Builder-</h3>
            <p>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
          </p>

          <p>
            <h3>Main highlights</h3>
            <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
          </p>
        </p>
        <a>
          Show more
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>
      <div className="rating-card">
        <div className='rate'>
        <h1>9.3</h1>
            <p>Exceptional</p>
            <div>
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
            </div>
        </div>
        <button>View</button>
      </div>
    </div>
    </div>

    <div className='flex flex-col justify-center items-center w-[70%]'>
    <div className='w-[100%] mb-[-60px] z-10 bg-transparent'>
        <p className='flex justify-center ml-[-20px] border rounded-full p-2 w-10 mt-2 bg-[#FFFFFF] text-[#626E79] border-[#E1E4E6]'>4</p>
    </div>
    <div className="card">
      <div className="card-image">
        <img src={url} alt="#" />
        <p>CDK</p>
      </div>
      <div className="card-details">
        <p>
          <p>
            <h3>CDK Resposive Builder:</h3>
            <p>An extensive library of widgets and apps, and detailed step-by-step guides</p>
          </p>

          <p>
            <h3>Main highlights</h3>
            <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
          </p>
        </p>
        <a>
          Show more
          <FontAwesomeIcon icon={faAngleDown} />
        </a>
      </div>
      <div className="rating-card">
        <div className='rate'>
        <h1>9.1</h1>
            <p>Very Good</p>
            <div>
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
              <FontAwesomeIcon icon={faStar} className='w-4' />
            </div>
        </div>
        <button>View</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card;
