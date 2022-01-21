import Image from 'next/image';
import cx from 'classnames';

import useLocalStorage from '../useLocalStorage';

export default function PresentCard({ description, recipient, children, hideThanksButton = false }) {
  const key = description.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();

  const [ isUnwrapped, setIsUnwrapped ] = useLocalStorage(key + '-unwrapped', false);
  const [ showingDetails, setShowingDetails ] = useLocalStorage(key + '-details', false);

  const imgSrc = `/images/${key}-${isUnwrapped ? 'unwrapped' : 'wrapped'}.png`;

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
        className={cx('modal', { open: showingDetails, closed: !showingDetails })}
        onClick={closeClicked}>
        <div className="card" style={{ position: 'relative' }} onClick={(e) => {
          e.stopPropagation();
        }}>
          <img src={imgSrc} alt="Present" />
          <i>for {recipient}</i>
          {
            isUnwrapped
              ? <>
                {children}
                <button className="flat"
                  style={{ display: hideThanksButton ? 'none' : 'initial' }}
                  onClick={closeClicked}>Thanks</button>
              </>
              : <>
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
          height: 100vh;
          overflow: scroll;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 1rem;
          z-index: 1;
          display: none;
        }

        .modal.open {
          animation: modalswipe 100ms linear forwards;
          display: block;
        }

        .modal .card {
          background-color: white;
          max-width: 480px;
          margin: auto;
          width: 100%;
          margin-bottom: 5rem;
        }

        .modal i {
          font-size: 1.2rem;
          margin: 0.5rem;
          display: block;
        }

        @keyframes modalswipe {
          0%   { opacity: 0; transform: translate(0%, 20%) matrix(1, 0, 0, 1, 0, 0); display: none }
          100% { opacity: 1; transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0); display: block }
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
          width: 80%;
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