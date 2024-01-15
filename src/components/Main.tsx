import { useImage } from "../hooks/useImage";
import ImageUploader from "./ImageUploader";
import { Context } from "../types";
import Loading from "./Loading";
import UploadSuccessful from "./UploadSuccessful";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import UploadCanceled from "./UploadCanceled";
import useActions from "../hooks/useActions";

const Main = (): JSX.Element => {
  const { isLoading, bg, isCopied, divBg, uploadSuccessful, uploadedImageUrl, uploadedImage } = useImage() as Context
  const { downloadFile, copyToClipboard } = useActions()

  const handleCopy = () => {
    copyToClipboard(uploadedImageUrl)
    if (isCopied) toast.success('Link copied to clipboard!')
  }

  return (
    <main style={{ background: bg }} className={`flex justify-center flex-col items-center h-full w-full pb-20 text-[14px]`}>
      <Toaster visibleToasts={1}/>
      <motion.div style={{background: divBg}} key={`${isLoading}`} animate={{opacity:1}} className="opacity-0 rounded-lg flex p-2 justify-center shadow-lg w-fit max-w-[512px] h-fit" >
        {isLoading 
        ? <Loading/> 
        : uploadSuccessful && uploadedImageUrl != ''
        ? <UploadSuccessful/> 
        : uploadSuccessful && uploadedImageUrl === ''
        ? <UploadCanceled/>
        : <ImageUploader/>} 
      </motion.div>
      {uploadSuccessful && uploadedImageUrl != '' ?
      <div className="flex gap-3 items-center mt-5">
        <button onClick={handleCopy} className="text-xs flex items-center justify-center gap-1 tracking-[-0.04em] focus:outline-none active:ring-1 text-white cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 rounded-md h-[30px]">
          <img src="/assets/Link.svg"></img>
          Share
        </button>
        <button onClick={() => downloadFile(uploadedImage)} className="text-xs flex items-center justify-center gap-1 tracking-[-0.04em] focus:outline-none active:ring-1 text-white cursor-pointer hover:bg-blue-600 bg-blue-500 px-3 rounded-md h-[30px]">
          <img src="/assets/download.svg"></img>
          Download
        </button>
      </div> : null}
    </main>
  );
};

export default Main