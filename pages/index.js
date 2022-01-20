import Head from 'next/head';
import useInterval from 'react-useinterval';
import cx from 'classnames';

import PresentCard from '../components/PresentCard';
import { useState } from 'react';

export default function Home() {
  const [ headlineIndex, setHeadlineIndex ] = useState(0);
  const headlines = [ 'MERRY', 'FUCKING', 'CHRISTMAS', '🎄' ];

  function incrementHeadlineIndex() {
    if(headlineIndex < headlines.length) {
      setHeadlineIndex(headlineIndex + 1);
    }
  }

  useInterval(incrementHeadlineIndex, 1000);

  return (
    <div className="container">
      <Head>
        <title>Merry Fucking Christmas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={cx('welcome', { completed: headlineIndex >= headlines.length })}>
          <div>
            {
              headlines.map((text, i) => (
                <h1 key={i} className={cx('title', { 'show': headlineIndex === i, 'shown': headlineIndex > i })}>{text}</h1>
              ))
            }
          </div>
        </div>

        <p className="description">
          I created this experience to save me the burden of having to present and explain
          your Christmas gifts in person. Click/tap on the gift you want to unwrap.
        </p>

        <div className="grid">
          <PresentCard description="Litographs Pride Shirt" recipient="Ashley">
            <p>
              This shirt is printed with the text of the Obergefell v. Hodges Supreme Court decision.
              It's from a website called <a href="https://litographs.com" target="_blank" rel="noreferrer">Litographs</a> that
              does this with all kinds of text sources.
            </p>
            <p>
              If it's the wrong size, let me know, I can exchange it.
            </p>
            <p>
              Full disclosure, I liked it so much when I saw it that I got one for myself too. Sorry for
              twinning.
            </p>
          </PresentCard>
          <PresentCard description="Metal Space Models" recipient="Ashley">
            <p>
              These are some models made out of metal. You assemble them by just punching out the perforated
              pieces from the sheet and then snapping them together. Presumably there are some instructions.
            </p>
            <p>
              I wasn't sure if you'd like doing these, but I thought maybe it would be fun to work on them
              together next time we hang out. Or, if you don't like actually putting them together, I can do
              them for you.
            </p>
          </PresentCard>
          <PresentCard description="Beat BG Button" recipient="Chas">
            <p>
              I couldn't stand how sad Chas was that he couldn't find this in the M Den when I was there,
              so I made one. Way to show your school spirit.
            </p>
          </PresentCard>
          <PresentCard description="Chocolate Coffee Fizzies" recipient="Grace">
            <p>
              "There's something so human about taking something great and ruining it a little so you can
              have more of it." I know you love chocolate and coffee, so I couldn't resist giving you some
              of these drinks that sort of ruin them both.
            </p>
            <p>
              Actually I really like these, but if you don't, well that's what makes it a joke gift.
            </p>
          </PresentCard>
          <PresentCard description="ENG-100" recipient="Ashley">
            <p>
              This isn't really a present; I had it hanging up in the room you'd have been in when you
              were going to come visit. But now I have to bring the trolling to you.
            </p>
            <p>
              If you don't want this, I will legit hang it up in my house.
            </p>
          </PresentCard>
          <PresentCard description="Bike Lock" recipient="Ashley">
            <p>
              This is a fairly heavy-duty lock, so hopefully it will keep your next bike from getting stolen.
            </p>
          </PresentCard>
          <PresentCard description="Hot Chocolate Party" recipient="Whoever">
            <p>
              I know you're not that into sweets and maybe Grace or Chas will like this more than you
              will. But you deserve marshmallows too, and luckily there is Trader Joe's.
            </p>
          </PresentCard>
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

        @keyframes fadeout {
          0% {
            opacity: 1;
            top: 0;
          }
          100% {
            opacity: 0;
            top: 100vh;
          }
        }

        @keyframes revealText {
          from { opacity: 0; transform: translate(0%, 100%) matrix(1, 0, 0, 1, 0, 0); }
          to   { opacity: 1; transform: translate(0%, 0%) matrix(1, 0, 0, 1, 0, 0); }
        }

        .welcome {
          background-color: black;
          color: white;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          z-index: 1;
          display: flex;
          align-items: center;
        }

        .welcome.completed {
          animation: fadeout 2s cubic-bezier(0.7, 0, 0.7, 1) forwards;
        }

        .welcome > div {
          width: 100%;
        }

        .welcome h1 {
          margin: 1rem 0;
          visibility: hidden;
        }

        .welcome h1.show {
          visibility: initial;
          animation: revealText 100ms cubic-bezier(0.7, 0, 0.3, 1) forwards;
        }

        .welcome h1.shown {
          visibility: initial;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a, a:hover, a:active, a:visited {
          color: blue;
        }

        p {
          text-align: center;
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

        button { 
          background: none;
        }

        button.flat {
          font-size: 1.2rem;
          border: none;
          background-color: #498bfc;
          color: white;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
          padding: 0.5rem;
          text-transform: uppercase;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
