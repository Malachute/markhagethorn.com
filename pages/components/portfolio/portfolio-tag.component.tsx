import React from "react";
import { PortfolioTags } from "./portfolio-tags.enum";

function PortfolioTag(props: PortfolioTagContent) {
  const { name } = props;

  const tagImage = (tag: PortfolioTags) => {
    switch (tag) {
      case PortfolioTags.ANGULAR:
        return "/assets/icons/angular.svg";
      case PortfolioTags.ANGULARJS:
        return "/assets/icons/angularjs.svg";
      case PortfolioTags.REACTJS:
        return "/assets/icons/reactjs.svg";
      case PortfolioTags.NEXTJS:
        return "/assets/icons/nextjs.svg";
      case PortfolioTags.PHP:
        return "/assets/icons/php.svg";
      case PortfolioTags.WORDPRESS:
        return "/assets/icons/wordpress.svg";
      case PortfolioTags.UBUNTU:
        return "/assets/icons/ubuntu.svg";
      case PortfolioTags.FIREBASE:
        return "/assets/icons/firebase.svg";
      case PortfolioTags.NOSQL:
        return "/assets/icons/nosql.svg";
      case PortfolioTags.RUBYONRAILS:
        return "/assets/icons/rubyonrails.svg";
      case PortfolioTags.IONIC:
        return "/assets/icons/ionic.svg";
      case PortfolioTags.CORDOVA:
        return "/assets/icons/cordova.svg";
      case PortfolioTags.PUBLISHING:
        return "/assets/icons/book.svg";
      case PortfolioTags.ADSENSE:
        return "/assets/icons/google.svg";
      case PortfolioTags.MAGENTO:
        return "/assets/icons/magento.svg";
      case PortfolioTags.CICD:
        return "/assets/icons/cicd.svg";
      case PortfolioTags.TAILWINDCSS:
        return "/assets/icons/tailwind.svg";
      case PortfolioTags.STENCILJS:
        return "/assets/icons/stenciljs.svg";

      default:
        return null;
    }
  };

  return (
    <li className="flex content-center mr-4">
      <i className="w-6 mr-0.5">
        <img src={tagImage(name)} width="24" height="24" alt={name} />
      </i>
      <span>{name}</span>
    </li>
  );
}

interface PortfolioTagContent {
  name: PortfolioTags;
}

export default PortfolioTag;
