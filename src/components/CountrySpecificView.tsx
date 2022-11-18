import { useEffect, useState } from "react";
import { Country } from "../CountryInterface";
import DropDownMenu from "./DropDownMenu";


const randomCountry = (countries: Country[]) => {
    const randomIndex = Math.floor(Math.random()*(countries.length))
    return countries[randomIndex]
}

export default function CountrySpecificView(): JSX.Element {

    const [country, setCountry] = useState<Country>()
    const [allCountries, setAllCountries] = useState<Country[]>([])
    const [language, setLanguage] = useState('rus')


    useEffect(() => {
        const fetchAllCountries = async () => {
            const res = await fetch (
                "https://restcountries.com/v3.1/all"
            )
            const jsonBody: Country[] = await res.json()
            setAllCountries(jsonBody)
        }
        fetchAllCountries()
    }, [])

    

    const handleClick = () => {
        const randCountry = randomCountry(allCountries)
        setCountry(randCountry)
    }

    
    // useEffect(() => {
    //     const randCountry = randomCountry(allCountries)
    //     const fetchCountry = async () => {
            
    //         const reponse = await fetch (
    //             `https://restcountries.com/v3.1/name/${randCountry}?fullText=true`
    //         )
    //         const jsonBody: Country[] = await reponse.json()
    //         setCountry(jsonBody[0])
    //         console.log(jsonBody[0])
    //     }
    //     fetchCountry()
    // }, [])

    return(
        <>
        <button onClick={handleClick}>RANDOM COUNTRY</button>
        {country && (
            <>  
                <h1 className="CountryTitle">{country.name.common}</h1>
                <img className="FlagImage" src={country.flags.png} width="30%" height="auto" alt="country"/>
                <h1>Translation in {language}: {country.translations[language].common}</h1>
                <DropDownMenu 
                    language={language}
                    setLanguage={setLanguage}
                />
            </>
        )}
        </>
    )
}

