import { useImage } from "../hooks/useImage";
import { Context } from "../types";

export default function UploadSuccessful() {
  const { uploadedImageUrl } = useImage() as Context
  
  return <img width={500} src={uploadedImageUrl} className="rounded-xl max-w-[500px]"></img>
}