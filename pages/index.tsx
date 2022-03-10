import Head from "next/head";
import PortfolioItem from "./components/portfolio/portfolio-item.component";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mark Hagethorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Mark Hagethorn&apos;s portfolio</h1>

        <PortfolioItem></PortfolioItem>

        <div className="well" id="safeport">
          <div className="thumbnail">
            <a
              href="https://www.safe-port.nl/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/safe-port.png"
                alt="safeport logo"
              />
            </a>
          </div>
          <div className="description">
            <a
              href="https://www.safe-port.nl/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>SafePort</h2>
            </a>
            <p>A simple one-page WordPress site for consulting services.</p>
          </div>
        </div>

        <div className="well" id="softpak">
          <div
            className="thumbnail"
            style={{
              backgroundColor: "#00457c",
              borderRadius: "4px",
              padding: "10px 8px",
              maxWidth: "188px",
            }}
          >
            <a href="https://www.softpak.nl/" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/softpak.png"
                alt="softpak"
              />
            </a>
          </div>
          <div className="description">
            <a href="https://www.softpak.nl/" target="_blank" rel="noreferrer">
              <h2>Softpak</h2>
            </a>
            <p>
              Modernising the existing Progress-based application to
              browser-based Angular application.
            </p>
          </div>
        </div>

        <div className="well" id="prointermediair">
          <div className="thumbnail">
            <a
              href="https://pro-intermediair.nl"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/images/pro-intermediair.png"
                alt="PRO-Intermediair"
                
              />
            </a>
          </div>
          <div className="description">
            <a
              href="https://pro-intermediair.nl"
              target="_blank"
              rel="noreferrer"
            >
              <h2>PRO-Intermediair</h2>
            </a>
            <p>
              Firebase Angular application, using the Firestore database for its
              CMS, created for a recruitment company in the area of Rotterdam in
              the Netherlands.
            </p>
          </div>
        </div>

        <div className="well" id="clubsjarel">
          <div className="thumbnail">
            <a href="https://clubsjarel.nl" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/club-sjarel.png"
                alt="Club Sjarel"
                
              />
            </a>
          </div>
          <div className="description">
            <a href="https://clubsjarel.nl" target="_blank" rel="noreferrer">
              <h2>Club Sjarel</h2>
            </a>
            <p>Angular application using Firebase hosting and database.</p>
          </div>
        </div>

        <div className="well" id="visor">
          <div className="thumbnail">
            <a href="https://byvisor.com" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/visor-logo-large.jpg"
                alt="Visor Ski Wear"
              />
            </a>
          </div>
          <div className="description">
            <a href="https://byvisor.com" target="_blank" rel="noreferrer">
              <h2>VISOR</h2>
            </a>
            <p>WordPress and Magento webshop that sells ski clothes.</p>
          </div>
        </div>

        <div className="well" id="ticketcounter">
          <div className="thumbnail">
            <a href="https://ticketcounter.eu" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/ticketcounter.png"
                alt="ticketcounter"
              />
            </a>
          </div>
          <div className="description">
            <a href="https://ticketcounter.eu" target="_blank" rel="noreferrer">
              <h2>Ticketcounter</h2>
            </a>
            <p>
              In short; helped built a PHP platform for ticketing. Creating and
              customizing shops that sell up to thousands of tickets per day.
            </p>
          </div>
        </div>

        <div className="well" id="vvflits">
          <div className="thumbnail">
            <a href="https://vvflits.nl" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/vvflits.png"
                alt="VV Flits"
                
              />
            </a>
          </div>
          <div className="description">
            <a href="https://vvflits.nl" target="_blank" rel="noreferrer">
              <h2>VV Flits</h2>
            </a>
            <p>
              Volunteer work: created (WordPress) website for the volleyball
              club Flits.
            </p>
          </div>
        </div>

        <div className="well" id="herabouw">
          <div className="thumbnail">
            <a href="https://herabouw.nl" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/herabouw.png"
                alt="Hera Bouw BV"
                
              />
            </a>
          </div>
          <div className="description">
            <a href="https://herabouw.nl" target="_blank" rel="noreferrer">
              <h2>Hera Bouw BV</h2>
            </a>
            <p>A simple WordPress website for a Local construction company.</p>
          </div>
        </div>

        <div className="well" id="tripl">
          <div className="thumbnail">
            <img src="/assets/images/tripl.png" alt="tripl"  />
          </div>
          <div className="description">
            <h2>Tripl</h2>
            <p>
              AngularJS & Ruby on Rails website that lets users discover their
              next vacation trip.
            </p>
          </div>
        </div>

        <div className="well" id="mashnew">
          <div className="thumbnail">
            <img src="/assets/images/mashnu.png" alt="Mashnu"  />
          </div>
          <div className="description">
            <h2>Mash</h2>
            <p>
              Fully automated WordPress website, with aggressive caching, that
              aggregates stories from several reputable news sources and
              displays those with related content from Twitter and Youtube.
            </p>
          </div>
        </div>

        <div className="well" id="easymarketing">
          <div className="thumbnail">
            <img
              src="/assets/images/easymarketing.png"
              alt="easymarketing"
              
            />
          </div>
          <div className="description">
            <h2>EasyMarketing</h2>
            <p>
              Ruby on Rails & AngularJS based website that tries to automate the
              creation of advertising campaigns on Google AdWords as much as
              possible.
            </p>
          </div>
        </div>

        <div className="well" id="jobspot">
          <div className="thumbnail">
            <img
              src="/assets/images/jobspot-large.jpg"
              alt="jobspot"
              
            />
          </div>
          <div className="description">
            <h2>JobSpot</h2>
            <p>
              Ruby on Rails & AngularJS based website that helps jobsearchers
              discover the company culture before applying.
            </p>
          </div>
        </div>

        <div className="well" id="optiwell">
          <div className="thumbnail">
            <img
              src="/assets/images/optiwell-logo.jpg"
              alt="CampinaDeutschland Optiwell"
              
            />
          </div>
          <div className="description">
            <h2>Optiwell4Friends</h2>
            <p>
              Ruby on Rails landing page for a temporary promotion of Optiwell
              products from Campina.
            </p>
          </div>
        </div>

        <div className="well" id="ordify">
          <div className="thumbnail">
            <img
              src="/assets/images/ordify.png"
              alt="Ordify GmbH"
              
            />
          </div>
          <div className="description">
            <h2>Ordify</h2>
            <p>
              App made with PhoneGap for ordering food in restaurants. Basic app
              promotion webpage in Ruby on Rails as homepage.
            </p>
          </div>
        </div>

        <div className="well" id="bailine">
          <div className="thumbnail">
            <a href="https://bailine.nl" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/bailine.png"
                alt="Bailine Barendrecht"
                
              />
            </a>
          </div>
          <div className="description">
            <a href="https://bailine.nl" target="_blank" rel="noreferrer">
              <h2>Bailine Barendrecht</h2>
            </a>
            <p>Wordpress-based website for a local weight-loss company.</p>
          </div>
        </div>

        <div className="well" id="duoblogger">
          <div className="thumbnail">
            <img
              src="/assets/images/duoblogger.png"
              alt="DuoBlogger"
              
            />
          </div>
          <div className="description">
            <h2>DuoBlogger</h2>
            <p>
              Started out as a Wordpress blog in 2006. Further developed into a
              consulting service for advertising with AdSense.
            </p>
          </div>
        </div>

        <div className="well" id="autoblogsense">
          <div className="thumbnail">
            <img
              src="/assets/images/autoblogsense.jpg"
              alt="Autoblog Sense"
              
            />
          </div>
          <div className="description">
            <h2>AutoBlog Sense</h2>
            <p>
              eBook written as a step-by-step instruction for creating your very
              own autoblog using Wordpress. Published using Clickbank.
            </p>
          </div>
        </div>

        <div className="well" id="consulting">
          <div className="thumbnail">
            <img
              src="/assets/images/consulting.png"
              alt="AdSense Consulting"
              
            />
          </div>
          <div className="description">
            <h2>AdSense Consulting</h2>
            <p>
              DuoBlogger was used as a promotion for AdSense consulting. We
              helped people increase their overall conversion and income on
              their websites, be it higher CTR or helping them increase the
              CPM/CPC.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>

      <style jsx>{``}</style>

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
  );
}
