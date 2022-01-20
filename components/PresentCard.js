import { useState } from 'react';

export default function PresentCard({ description, recipient, children }) {
  const [ isUnwrapped, setIsUnwrapped ] = useState(false);
  const [ showingDetails, setShowingDetails ] = useState(false);
  
  // const key = description.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();
  // const imgSrc = `/images/${key}-${isUnwrapped ? 'unwrapped' : 'wrapped'}.jpg`;
  const imgSrc = `/images/${isUnwrapped ? 'unwrapped' : 'wrapped'}.jpg`;

  function cardClicked() {
    setShowingDetails(true);
  }

  function unwrapClicked() {
    setIsUnwrapped(true);
  }
  
  function closeClicked() {
    setShowingDetails(false);
  }
  
  return (
    <>
      <div 
        className="modal"
        style={{ display: showingDetails ? 'block' : 'none' }}
        onClick={closeClicked}>
        <div className="card" style={{ position: 'relative' }} onClick={(e) => {
          e.stopPropagation();
        }}>
          <img src={imgSrc} alt="Present" />
          {
            isUnwrapped
              ? <>
                <h3>{description}</h3>
                <i>for {recipient}</i>
                {children}
                <button className="flat" onClick={closeClicked}>Thanks</button>
              </>
              : <>
                <i>for {recipient}</i>
                <h3>Unwrap this present?</h3>
                <button className="flat" onClick={unwrapClicked}>I did</button>
              </>
          }
        </div>
      </div>
      <button className="card" onClick={cardClicked} style={{ position: 'relative' }}>
        <img src={imgSrc} alt="Present" />
      </button>
      <style jsx>{`
        .modal {
          top: 0;
          left: 0;
          position: fixed;
          background-color: white;
          width: 100vw;
          min-height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 1rem;
          z-index: 1;
        }

        .modal .card {
          background-color: white;
          max-width: 480px;
          margin: auto;
        }

        .modal i {
          font-size: 1.2rem;
          margin: 0.5rem;
          display: block;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          text-align: center;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          text-transform: uppercase;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card img {
          width: 100%;
          display: block;
        }      
      `}</style>
    </>
  );
}