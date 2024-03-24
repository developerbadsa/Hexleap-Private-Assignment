import React from 'react';

const SectionHeading = ({headingText}) => {
  return (
    <h1 className='font-bold text-5xl text-black dark:text-white my-3' >{headingText}</h1>
  );
};

export default SectionHeading;