import Head from 'next/head'
import { useState } from 'react'

const presents = [
  { wrappedImage: '/images/kraft-package.jpg', unwrappedImage: '/images/unwrapped.jpg', summary: 'A cool shirt', description: 'Not sure what else to say about this' },
  { wrappedImage: '/images/kraft-package.jpg', unwrappedImage: '/images/unwrapped.jpg', summary: 'A cool bike lock', description: 'Make sure you use it' }
]

export default function Home() {
  function Present({presentInitial}) {
    const [present, setPresent] = useState(presentInitial);
    const [modal, setModal] = useState(false);

    function unwrap() {
      setPresent({
        ...present,
        isUnwrapped: true
      })
    }

    function openModal() {
      setModal(true);
    }

    function closeModal() {
      setModal(false);
    }

    return (
      <>
        {modal ? 
          <div className="modal card">
            {present.isUnwrapped
              ? <div>
                  <img src={present.unwrappedImage} />
                  <h3>{present.summary}</h3>
                  <p>{present.description}</p>
                  <button onClick={closeModal}>THANKS</button>
                </div>
              : <div>
                  <img src={present.wrappedImage} />
                  <h3>Unwrap this present</h3>
                  <button onClick={unwrap}>I DID</button>
                </div>
            }
          </div>
        : null}
        <button className="card" onClick={openModal}>
          <img src={present.isUnwrapped ? present.unwrappedImage : present.wrappedImage} />
        </button>
        <style jsx>{`
          button {
            background-color: inherit;
          }

          .modal {
            top: 0;
            left: 0;
            position: fixed;
            width: calc(100vw - 2rem);
            min-height: calc(100vh - 2rem);
            background-color: white;
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
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .card img {
            width: 100%;
          }
        `}</style>
      </>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Christmas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          XMAS
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {presents.map(present => (
            <Present presentInitial={present} />
          ))}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          background-color: inherit;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
