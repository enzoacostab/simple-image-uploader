import { useImage } from "../hooks/useImage"
import { Context } from "../types"

export default function Loading() {
  const { text, border } = useImage() as Context

  return(
    <div className="flex w-full flex-col gap-4 px-16 justify-center items-center py-5">
      <p style={{ color: text }} className="text-left font-light"><span className="font-bold">Uploading</span>, please wait..</p>
      <div style={{ background: border }} className="h-2 w-80 overflow-hidden bg-[#F2F2F2] rounded-[8px]">
        <div className="relative w-[100px] left-[-100px] h-full bg-[#2F80ED] rounded-[8px] animate-loading"></div>
      </div>
    </div>
  )
}