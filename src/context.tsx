import { createContext, useState } from "react";
import { Context, Props, Theme } from "./types";

export const ImageContext = createContext<Context | null>(null);

const ImageProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [theme, setTheme] = useState('light' as Theme);
  const [bg, setBg] = useState('#F9FAFB');
  const [divBg, setDivBg] = useState('#FFFFFF');
  const [border, setBorder] = useState('#E5E7EB');
  const [text, setText] = useState('#212936');

  return (
    <ImageContext.Provider
      value={{
        isLoading, 
        setIsLoading,
        uploadSuccessful,
        setUploadSuccessful,
        uploadedImageUrl,
        setUploadedImageUrl,
        uploadedImage, 
        setUploadedImage,
        isCopied,
        setIsCopied,
        theme, 
        setTheme,
        bg,
        setBg,
        divBg,
        setDivBg,
        border, 
        setBorder,
        text, 
        setText
      }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider

