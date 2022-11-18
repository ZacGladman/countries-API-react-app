
import {useState} from "react"


interface DropDownProps {
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
}

export default function DropDownMenu({language, setLanguage}: DropDownProps): JSX.Element {


    const [open, setOpen] = useState(false);
    

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="dropdown">
            <button onClick={handleOpen}>SELECT LANGUAGE</button>
            {open ? (
                    <ul className="menu">
                        <button className="menu-item" onClick={() => {setLanguage('ara'); setOpen(false)}}>ARABIC</button>
                        <button className="menu-item" onClick={() => {setLanguage('bre'); setOpen(false)}}>BRETON</button>
                        <button className="menu-item" onClick={() => {setLanguage('zho'); setOpen(false)}}>CHINESE</button>
                        <button className="menu-item" onClick={() => {setLanguage('hrv'); setOpen(false)}}>CROATIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('ces'); setOpen(false)}}>CZECH</button>
                        <button className="menu-item" onClick={() => {setLanguage('nld'); setOpen(false)}}>DUTCH</button>
                        <button className="menu-item" onClick={() => {setLanguage('est'); setOpen(false)}}>ESTONIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('fin'); setOpen(false)}}>FINISH</button>
                        <button className="menu-item" onClick={() => {setLanguage('deu'); setOpen(false)}}>GERMAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('fra'); setOpen(false)}}>FRENCH</button>
                        <button className="menu-item" onClick={() => {setLanguage('hun'); setOpen(false)}}>HUNGARIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('ita'); setOpen(false)}}>ITALIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('jap'); setOpen(false)}}>JAPANESE</button>
                        <button className="menu-item" onClick={() => {setLanguage('kor'); setOpen(false)}}>KOREAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('per'); setOpen(false)}}>PERSIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('pol'); setOpen(false)}}>POLISH</button>
                        <button className="menu-item" onClick={() => {setLanguage('por'); setOpen(false)}}>PORTUGUESE</button>
                        <button className="menu-item" onClick={() => {setLanguage('rus'); setOpen(false)}}>RUSSIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('slk'); setOpen(false)}}>SLOVAKIAN</button>
                        <button className="menu-item" onClick={() => {setLanguage('spa'); setOpen(false)}}>SPANISH</button>
                        <button className="menu-item" onClick={() => {setLanguage('swe'); setOpen(false)}}>SWEDISH</button>
                        <button className="menu-item" onClick={() => {setLanguage('tur'); setOpen(false)}}>TURKISH</button>
                        <button className="menu-item" onClick={() => {setLanguage('urd'); setOpen(false)}}>URDU</button>
                        <button className="menu-item" onClick={() => {setLanguage('cym'); setOpen(false)}}>WELSH</button>
                    </ul>) : null}
        </div>
    )
}