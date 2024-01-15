import { Theme } from './../types';
import { ChangeEvent, DragEvent } from "react";
import { supabase } from "../supabaseClient";
import { useImage } from "./useImage";
import { Context } from "../types";
import { toast } from "sonner";

const useActions = () =>{
  const {
    setIsLoading, 
    setUploadedImageUrl, 
    setUploadedImage,
    setUploadSuccessful,
    setIsCopied,
    setTheme,
    setDivBg,
    setBorder,
    setText,
    setBg } = useImage() as Context

  const handleDrop= async (event: DragEvent<HTMLDivElement>) =>{
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    uploadFile(file)
  }

  const handleDragOver= (event: DragEvent<HTMLDivElement>) =>{
    event.preventDefault()
  }

  const handleClick= async(event: ChangeEvent<HTMLInputElement>) =>{
    if (event.target.files){
      const file = event.target.files[0]
      uploadFile(file)
    }
  }

  const uploadFile = async(file: File) => {
    setIsLoading(true);
    try {
      if (file.size > 2097152) throw new Error("The image exceeds 2MB")
      const filePath = `uploads/${file.name}`;
      await supabase.storage.from("bucket-1").upload(filePath, file);
      const urlData = supabase.storage.from("bucket-1").getPublicUrl(filePath);
      setUploadedImageUrl(urlData.data.publicUrl);
      setUploadedImage(filePath);
    } 
    catch (error) {
      console.error("Error uploading image:", error);
    } 
    finally {
      setIsLoading(false);
      setUploadSuccessful(true);
    }
  };

  const downloadFile = async(filePath: string) => {
    try {
      const { data, error } = await supabase.storage.from('bucket-1').download(filePath)
      if (error) throw error
      const url = URL.createObjectURL(data)
      const link = document.createElement('a') 
      link.href = url
      link.download = filePath.split('/')[1]
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading image:", error);
    } 
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (err) {
      err instanceof Error && toast.error(err.toString());
    }
  };

  const handleTryAgain = () => {
    setUploadSuccessful(false);
  }

  const Home = () => {
    setUploadSuccessful(false);
    setUploadedImage('');
    setUploadedImageUrl('');
    setIsLoading(false);
  }

  const changeTheme = () => {
    setTheme((prev: Theme) => prev === 'light' as Theme ? 'dark' as Theme : 'light' as Theme);
    setBg(prev => prev === '#F9FAFB' ? '#121826' : '#F9FAFB');
    setDivBg(prev => prev === '#FFFFFF' ? '#212936' : '#FFFFFF');
    setBorder(prev => prev === '#E5E7EB' ? '#4D5562' : '#E5E7EB');
    setText(prev => prev === '#212936' ? '#F9FAFBCC' : '#212936');
  }

  return { handleDrop, changeTheme, handleDragOver, handleClick, copyToClipboard, handleTryAgain, downloadFile, Home }
}

export default useActions