import React from 'react';
import PortfolioTag from './portfolio-tag.component';
import { PortfolioTags } from './portfolio-tags.enum';

function PortfolioItem(props: PortfolioItem) {
    const { name, description, href, imageName, tags } = props;

    const portfolioTags = tags?.map((tag, index) => {
      return <PortfolioTag key={index} name={tag} />;
    });

    return (
      <li
        className={(href?.length > 0 ? "has-link" : "") + " flex relative my-4"}
      >
        <style jsx>{`
          .has-link a:hover {
            background-image: url("/assets/images/link.svg");
            background-size: 24px 24px;
            background-position: calc(100% - 1rem) 1rem;
            background-repeat: no-repeat;
          }
        `}</style>
        {href?.length > 0 ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-nowrap p-4 bg-slate-100 shadow hover:shadow-md border border-slate-300 hover:border-green-500 rounded-xl"
          >
            <div className="w-1/4 h-full flex content-center justify-start">
              <img
                src={`/assets/images/${imageName}`}
                alt={`${name} logo`}
                className="max-h-24 object-contain pr-12"
              />
            </div>
            <div className="w-3/4 flex flex-col">
              <h2 className="text-2xl font-bold">{name} <span></span></h2>
              <p>{description}</p>
              <ul className="tags flex mt-2">{portfolioTags}</ul>
            </div>
          </a>
        ) : (
          <div className="flex flex-1 flex-nowrap p-4 bg-slate-100 shadow border border-slate-300 rounded-xl">
            <div className="w-1/4 h-full flex content-center justify-start">
              <img
                src={`/assets/images/${imageName}`}
                alt={`${name} logo`}
                className="max-h-24 object-contain pr-12"
              />
            </div>
            <div className="w-3/4 flex flex-col">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p>{description}</p>
              <ul className="tags flex mt-2">{portfolioTags}</ul>
            </div>
          </div>
        )}
      </li>
    );
}

interface PortfolioItem {
  name: string;
  date: string;
  description: string;
  imageName: string;
  href?: string;
  tags?: PortfolioTags[];
}

export default PortfolioItem;