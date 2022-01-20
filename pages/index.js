import Head from 'next/head';
import PresentCard from '../components/PresentCard';

export default function Home() {
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
          <PresentCard description="San Pellegrino Chocolate Coffee" recipient="Grace">
            <p>
              "There's something so human about taking something great and ruining it a little so you can
              have more of it." I know you love chocolate and coffee, so I couldn't resist giving you some
              of these drinks that sort of ruin them both.
            </p>
            <p>
              Actually I really like these, but if you don't, well that's what makes it a joke gift.
            </p>
          </PresentCard>
          <PresentCard description="Odegra Poster" recipient="Ashley">
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

        main {
          padding: 5rem 0;
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
          text-align: justify;
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
