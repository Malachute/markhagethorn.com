import Head from "next/head";
import PortfolioItem from "./components/portfolio/portfolio-item.component";
import { PortfolioArray } from "./components/portfolio/portfolio-array";

export default function Home() {

  const portfolioList = PortfolioArray.map((item, index) => {
    return (
      <PortfolioItem
        key={index}
        name={item.name}
        date={item.date}
        description={item.description}
        href={item.href}
        imageName={item.imageName}
        tags={item.tags}
      />
    );
  });

  return (
    <div className="home">
      <Head>
        <title>Mark Hagethorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container flex columns-2 mx-auto max-w-5xl px-2">
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-bold underline mb-2">Mark Hagethorn</h1>
          <p className="mb-3">
            Things I&apos;ve worked on in the past, including the notable tech
            associated with it:
          </p>
        </div>
        <div>
          <a
            href="mailto:mhagethorn@me.com"
            className="flex text-blue-500 mt-2 mr-2 no-underline hover:underline"
          >
            <i className="mr-2">
              <img
                src="/assets/images/email.svg"
                width="24"
                height="24"
                alt="email"
              />
            </i>
            Contact me via email
          </a>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-2">
        <ul>{portfolioList}</ul>
      </main>

      <footer className="flex content-center justify-center w-100 mt-4 mb-12 mx-auto max-w-5xl px-2">
        <div className="flex content-center text-center">
          <p>
            Made with
            <img
              src="/assets/icons/nextjs.svg"
              width="60"
              alt="nextjs"
              className="inline-block mx-2"
            />
            and hosted on
            <img
              src="/assets/icons/firebase.svg"
              width="30"
              alt="firebase"
              className="inline-block ml-2 mr-1"
            />
            FireBase.
            <br />
            <span className="italic text-gray-400">
              Last updated 07/04/2022
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
