import React from 'react';

const Search = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      { ...props }
    >
      <path
        d="M17.9166 32.25C21.0968 32.2493 24.1853 31.1847 26.6904 29.2256L34.5666 37.1018L37.1 34.5684L29.2239 26.6922C31.1839 24.1869 32.2492 21.0976 32.25 17.9166C32.25 10.0136 25.8197 3.58331 17.9166 3.58331C10.0136 3.58331 3.58331 10.0136 3.58331 17.9166C3.58331 25.8197 10.0136 32.25 17.9166 32.25ZM17.9166 7.16665C23.8453 7.16665 28.6666 11.988 28.6666 17.9166C28.6666 23.8453 23.8453 28.6666 17.9166 28.6666C11.988 28.6666 7.16665 23.8453 7.16665 17.9166C7.16665 11.988 11.988 7.16665 17.9166 7.16665Z"
        fill="#7C7C7C"
      />
    </svg>
  );
};

export default Search;
