import React from 'react';

const Home = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      { ...props }
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.305 4.96625L53.36 25.9912L50.7863 28.565L47.125 25.2445V48.9012L45.3125 50.7137H34.4375L32.625 48.9012V36.2137H25.375V48.9012L23.5625 50.7137H12.6875L10.875 48.9012V25.2735L7.25002 28.565L4.67627 25.9912L27.695 4.96625H30.305ZM14.5 21.9784V47.0887H21.75V34.4012L23.5625 32.5887H34.4375L36.25 34.4012V47.0887H43.5V21.9566L29 8.80875L14.5 21.9784Z"
        fill="white"
      />
    </svg>
  );
};

export default Home;
