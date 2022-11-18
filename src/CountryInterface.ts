export interface Country {
    name: CountryName,
    tld: string[],
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: unknown,
    idd: Idd,
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: unknown,
    translations: Translations,
    latlng: number[],
    landlocked: boolean,
    borders?: string[],
    area: number,
    demonyms: unknown,
    flag: string,
    maps: Maps,
    population: number,
    gini: unknown,
    fifa: string,
    car: Car,
    timezones: string[],
    continents: string[],
    flags: Flags,
    coatOfArms: CoatOfArms,
    startOfWeek: string,
    capitalInfo: CapitalInfo,
    postalCode?: PostalCode
}

interface CountryName {
    common: string,
    official: string,
    nativeName: unknown
}

interface Idd {
    root: string,
    suffixes: string[]
}

interface Translations {
    [ara: string]: OfficialAndCommonTranslations
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
    rus: OfficialAndCommonTranslations,
    slk: OfficialAndCommonTranslations,
    spa: OfficialAndCommonTranslations,
    swe: OfficialAndCommonTranslations,
    tur: OfficialAndCommonTranslations,
    urd: OfficialAndCommonTranslations,
    zho: OfficialAndCommonTranslations    
}

export interface OfficialAndCommonTranslations{
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

interface CapitalInfo {
    latlng: number[]
}

interface PostalCode {
    format: string,
    regex: string
}