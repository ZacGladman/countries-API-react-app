import { useEffect } from "react";


interface Country {
    name: CountryName,
    tld: string[],
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: {},
    idd: {},
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: {},
    translations: Translations,
    latlng: number[],
    landlocked: boolean,
    borders: string[],
    area: number,
    denonyms: {},
    flag: string,
    maps: Maps,
    population: number,
    gini: {},
    fifa: string,
    car: Car,
    timezones: string[],
    continents: string[],
    flags: Flags,
    coatOfArms: 

}

interface CountryName {
    common: string,
    official: string,
    nativeName: {}
}

interface Translations {
    ara: OfficialAndCommonTranslations,
    bre: OfficialAndCommonTranslations,
    ces: OfficialAndCommonTranslations,
    cym: OfficialAndCommonTranslations,
    deu: OfficialAndCommonTranslations,
    est: OfficialAndCommonTranslations,
    fin: OfficialAndCommonTranslations,
    fra: OfficialAndCommonTranslations,
    hrv: OfficialAndCommonTranslations,
    hun: OfficialAndCommonTranslations,
    ita: OfficialAndCommonTranslations,
    jpn: OfficialAndCommonTranslations,
    kor: OfficialAndCommonTranslations,
    nld: OfficialAndCommonTranslations,
    per: OfficialAndCommonTranslations,
    pol: OfficialAndCommonTranslations,
    por: OfficialAndCommonTranslations,
    spa: OfficialAndCommonTranslations,
    swe: OfficialAndCommonTranslations,
    tur: OfficialAndCommonTranslations,
    urd: OfficialAndCommonTranslations,
    zho: OfficialAndCommonTranslations    
}

interface OfficialAndCommonTranslations{
    official: string,
    common: string
}

interface Maps {
    googleMaps: string,
    openStreetMaps: string
}

interface Car {
    signs: string[],
    side: string
}

interface Flags {
    png: string,
    svg: string
}

interface CoatOfArms {
    png: string,
    svg: string
}