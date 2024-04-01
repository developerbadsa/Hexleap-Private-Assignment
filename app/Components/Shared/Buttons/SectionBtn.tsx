import React from 'react';

interface Props {
  btnText: string;
}

const SectionBtn: React.FC<Props> = ({ btnText }) => {
  return (
   <button className='text-white px-6 py-2 bg-sky-600 text-sm'>
    {btnText}
   </button>
  );
};

export default SectionBtn;
