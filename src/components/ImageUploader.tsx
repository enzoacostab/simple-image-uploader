import useActions from "../hooks/useActions";
import { useImage } from "../hooks/useImage";
import { Context } from "../types";

export default function ImageUploader() {
  const { handleClick, handleDragOver, handleDrop } = useActions()
  const { border, text } = useImage() as Context
  
  return (
  <form className="w-full">
    <input onChange={handleClick} type="file" accept=".jpg, .jpeg, .png" name="image-file" id="image-file" className="opacity-0 hidden"/>
    <label htmlFor="image-file" className="cursor-pointer">
      <div onDrop={handleDrop} onDragOver={handleDragOver} style={{ borderColor: border }} className="px-36 py-28 rounded-lg h-full border-[2px] border-dashed border-[#e9ecee] flex flex-col justify-center items-center gap-5">
        <img
            width={40}
            alt=""
            src="/assets/exit.svg"
        />
        <p style={{ color: text }} className="text-sm tracking-[-0.04em] text-left inline-block">Drag & drop a file or <span className="text-[#3662E3]">browse files</span></p>
        <p style={{ color: text }} className="tracking-[-0.04em] font-light text-xs -mt-3 text-left inline-block">JPG, PNG or GIF - Max file size 2MB</p>
      </div>
    </label>
  </form>
  )
}