import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { TfiControlSkipBackward } from "react-icons/tfi";


const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-primary-txt text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;