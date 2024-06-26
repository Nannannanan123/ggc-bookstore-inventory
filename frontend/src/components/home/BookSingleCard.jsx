import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineVerified } from 'react-icons/md';
import { useState } from 'react';
import { PiBooks } from 'react-icons/pi';
import { IoMdBusiness } from 'react-icons/io';
import { PiStudent } from 'react-icons/pi';
import { GoDotFill } from 'react-icons/go';
import { LuBookCopy } from 'react-icons/lu';
import { MdOutlinePages } from 'react-icons/md';
import { LuBookLock } from 'react-icons/lu';
import { TbBookUpload } from 'react-icons/tb';
import { RiPagesLine } from 'react-icons/ri';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(book);

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      {/*       <h2 className='absolute top-1 right-2 px-4 py-1 bg-primary-txt rounded-lg'>
        <p className='text-white'>{book.pubYear}</p>
      </h2> */}
      <h4 className="my-2 text-primary-txt opacity-75 text-sm">
        ID: {book._id}
      </h4>

      <div className="flex flex-row justify-between items-center gap-3 mt-5">
        <div>
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-primary-txt text-2xl" />
            <h2 className="my-1 max-w-48 text-wrap">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-primary-txt text-2xl min-w-6" />
            <h2 className="my-1 overflow-hidden text-nowrap truncate max-w-48">
              {book.author}
            </h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <PiBooks className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.genre}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <IoMdBusiness className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.publisher}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <MdOutlineVerified className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.approvedBy}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <PiStudent className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.eduLevel}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <LuBookLock className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.isbn}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <TbBookUpload className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.bookSize}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <RiPagesLine className="text-primary-txt text-2xl" />
            <h2 className="my-1">{book.pages}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <LuBookCopy className="text-primary-txt text-2xl" />
            <h2
              className={`my-1 text-lg ${
                book.availability ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {book.availability.toLocaleString()}
            </h2>
          </div>
        </div>
        <img
          src={book.imageUrl}
          alt={book.title}
          className="absolute top-2 right-2 w-20 h-25 rounded-lg self-start shadow-2xl"
        />
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Tooltip title= "description" arrow placement= "top">
          <IconButton>
          <BiShow
          className="text-3xl text-primary-txt hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
          </IconButton>
        </Tooltip>

        <Link to={`/books/details/${book._id}`}>
          <Tooltip title ="info" arrow placement="top">
            <IconButton>
            <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <Tooltip title ="edit" arrow placement="top">
            <IconButton>
              <AiOutlineEdit className="text-2xl text-blue-600 hover:text-black" />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <Tooltip title ="delete" arrow placement="top">
            <IconButton>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
