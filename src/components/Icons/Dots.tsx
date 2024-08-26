import React from "react";

const Dots = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      {...props}

    >
      <path
        d="M23.75 32.5C23.75 33.4946 23.3549 34.4484 22.6517 35.1517C21.9484 35.8549 20.9946 36.25 20 36.25C19.0054 36.25 18.0516 35.8549 17.3483 35.1517C16.6451 34.4484 16.25 33.4946 16.25 32.5C16.25 31.5054 16.6451 30.5516 17.3483 29.8483C18.0516 29.1451 19.0054 28.75 20 28.75C20.9946 28.75 21.9484 29.1451 22.6517 29.8483C23.3549 30.5516 23.75 31.5054 23.75 32.5ZM23.75 20C23.75 20.9946 23.3549 21.9484 22.6517 22.6517C21.9484 23.3549 20.9946 23.75 20 23.75C19.0054 23.75 18.0516 23.3549 17.3483 22.6517C16.6451 21.9484 16.25 20.9946 16.25 20C16.25 19.0054 16.6451 18.0516 17.3483 17.3483C18.0516 16.6451 19.0054 16.25 20 16.25C20.9946 16.25 21.9484 16.6451 22.6517 17.3483C23.3549 18.0516 23.75 19.0054 23.75 20ZM23.75 7.5C23.75 8.49456 23.3549 9.44839 22.6517 10.1517C21.9484 10.8549 20.9946 11.25 20 11.25C19.0054 11.25 18.0516 10.8549 17.3483 10.1517C16.6451 9.44839 16.25 8.49456 16.25 7.5C16.25 6.50544 16.6451 5.55161 17.3483 4.84835C18.0516 4.14509 19.0054 3.75 20 3.75C20.9946 3.75 21.9484 4.14509 22.6517 4.84835C23.3549 5.55161 23.75 6.50544 23.75 7.5Z"
        fill="#6e01ff"
      />
    </svg>
  );
};

export default Dots;
