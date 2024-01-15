import {MdCancel} from 'react-icons/md'
import { useImage } from "../hooks/useImage";
import { Context } from "../types";
import useActions from '../hooks/useActions';

export default function UploadCanceled() {
  const { uploadedImageUrl, text } = useImage() as Context
  const { handleTryAgain } = useActions()

  return (
    <section className="h-fit py-10">
      <div className="flex flex-col gap-4 pb-6 items-center">
        <MdCancel fill="#d50000" size={42}></MdCancel>
        <h3 style={{ color: text }}  className="m-0 text-[18px] tracking-[-0.04em] font-medium font-poppins text-[#4F4F4F] text-left inline-block">Upload Canceled</h3>
      </div>
      <div className="flex justify-center">
        <img width={350} src={uploadedImageUrl} className="rounded-xl"></img>
      </div>
      <div className="flex flex-col items-center mt-5">
        <button style={{ color: text }}  onClick={handleTryAgain} className="text-xs tracking-[-0.04em] focus:outline-none hover:ring-1 hover:ring-gray-600 cursor-pointer border shadow-md border-[#4F4F4F] text-[#4F4F4F]  px-3 rounded-lg h-[30px]">
          Try Again
        </button>
      </div>
    </section>
  )
}