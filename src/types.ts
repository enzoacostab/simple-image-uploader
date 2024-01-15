import React from 'react'

export interface Context { 
    isLoading: boolean; 
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    isCopied: boolean,
    setIsCopied: React.Dispatch<React.SetStateAction<boolean>>,
    uploadSuccessful: boolean, 
    setUploadSuccessful: React.Dispatch<React.SetStateAction<boolean>>,
    uploadedImageUrl: string, 
    setUploadedImageUrl: React.Dispatch<React.SetStateAction<string>>,
    uploadedImage: string,
    setUploadedImage: React.Dispatch<React.SetStateAction<string>>,
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
    bg: string,
    setBg: React.Dispatch<React.SetStateAction<string>>,
    divBg: string,
    setDivBg: React.Dispatch<React.SetStateAction<string>>,
    border: string, 
    setBorder: React.Dispatch<React.SetStateAction<string>>,
    text: string, 
    setText: React.Dispatch<React.SetStateAction<string>>
}

export type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export type Theme = 'dark' | 'white'