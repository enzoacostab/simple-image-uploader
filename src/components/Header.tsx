import useActions from "../hooks/useActions"
import { useImage } from "../hooks/useImage"
import { Context, Theme } from "../types"

export default function Header () {
  const { Home, changeTheme } = useActions()
  const { bg, theme, divBg, border } = useImage() as Context

  return (
    <header style={{ background: bg, borderColor: theme === 'light' as Theme ? border : divBg }} className="border-b-2 px-[5%] h-[10%] bg-[#F9FAFB] flex justify-between items-center">
      <img width={150} height={33} onClick={Home} className="cursor-pointer text-white" src={`/assets/${theme === 'light' as Theme ? 'logo.svg' : 'logo-dark.svg'}`}></img>
      <div onClick={changeTheme} style={{ background: divBg, borderColor: border }} className="p-2 cursor-pointer hover:ring-1 active:ring-2 hover:ring-[#3662E3] bg-white border border-[#4D5562] rounded-lg">
        <img width={25} src={`/assets/${theme === 'light' as Theme ? 'Moon_fill.svg' : 'Sun_fill.svg'}`}/>
      </div>
    </header>
  )
}