import React from 'react';
import './card.scss'; // Import the SCSS file for styling
const url = "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"

const SmallCard = ({ product }) => {
  return (
    <div className='w-[80%]'>
    <h1 className='heading'>
      Related deals you might like for
    </h1>
    <div className='flex justify-evenly'>
    <div className="small-card">
      <div className="card-image">
        <img src={url} alt="#" />
      </div>
      <div className='offer'>
        <p>20% off</p>
        <p>Limited time</p>
      </div>
      <div className="card-details">
        <h1>Webbuilder 1</h1>
        <p>Computer Modern clasic with wix support</p>
        <div>
        <h2>$39.96</h2>
        <h3>$49.96</h3>
        <h4>(20% off)</h4>
        </div>
        <button>View Deal</button>
      </div>
    </div>

    <div className="small-card">
      <div className="card-image">
        <img src={url} alt="#" />
      </div>
      <div className='offer'>
        <p>20% off</p>
        <p>Limited time</p>
      </div>
      <div className="card-details">
        <h1>Webbuilder 1</h1>
        <p>Computer Modern clasic with wix support</p>
        <div>
        <h2>$39.96</h2>
        <h3>$49.96</h3>
        <h4>(20% off)</h4>
        </div>
        <button>View Deal</button>
      </div>
    </div>

    <div className="small-card">
      <div className="card-image">
        <img src={url} alt="#" />
      </div>
      <div className='offer'>
        <p>20% off</p>
        <p>Limited time</p>
      </div>
      <div className="card-details">
        <h1>Webbuilder 1</h1>
        <p>Computer Modern clasic with wix support</p>
        <div>
        <h2>$39.96</h2>
        <h3>$49.96</h3>
        <h4>(20% off)</h4>
        </div>
        <button>View Deal</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SmallCard;
