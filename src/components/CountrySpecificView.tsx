import { useEffect, useState } from "react";
import { Country } from "../CountryInterface";


const randomCountry = () => {
    const countries = ['United States', 'Brazil', 'Belgium', 'Norway', 'Guatemala', 'South Africa'];
    const randomIndex = Math.floor(Math.random()*(countries.length-1))
    return countries[randomIndex]
}

export default function CountrySpecificView(): JSX.Element {

    const [country, setCountry] = useState<Country>()
    const randCountry = randomCountry()
    useEffect(() => {
        const fetchCountry = async () => {
            const reponse = await fetch (
                `https://restcountries.com/v3.1/name/${randCountry}?fullText=true`
            )
            const jsonBody: Country[] = await reponse.json()
            setCountry(jsonBody[0])
        }
        fetchCountry()
    }, [])

    return(
        <>
        {country && (
            <>
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} width="50%" height="auto" alt="country"/>
            </>
        )}
        </>
    )
}

