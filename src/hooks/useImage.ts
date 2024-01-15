import { ImageContext } from "../context";
import { useContext } from "react";

export const useImage = () => {
  const context = useContext(ImageContext);
  if (context) return context
};