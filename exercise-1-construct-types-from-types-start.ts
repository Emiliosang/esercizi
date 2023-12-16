interface Country {
    name: string;
    code: string;
    languages: string[];
    currency?: string;
    population: number;
}

type PartialCountry = Partial<Country>;

const countryA: PartialCountry = {
    code: "CN",
    population: 1_412_600_000,
};

type CompleteCountry = Required<Country>;

const countryB: CompleteCountry = {
    name: "Greece",
    code: "GR",
    languages: ["Greek"],
    currency: "Euro", // Add the missing property
    population: 10_678_632,
};

type ReadonlyCountry = Readonly<Country>;

const countryC: ReadonlyCountry = {
    name: "Italy",
    code: "IT",
    languages: ["Italian"],
    population: 60_317_116,
};

console.log(countryC);

type CountryWithPopulation = Pick<Country, 'name' | 'code' | 'population'>;

const countryD: CountryWithPopulation = {
    name: "New Zealand",
    code: "NZ",
    population: 5_135_300,
};

type CountryWithoutPopulation = Omit<Country, 'population'>;

const countryE: CountryWithoutPopulation = {
    name: "Thailand",
    code: "TH",
    languages: ["Thai", "Isan", "Kam Mueang", "Pak Tai", "Malay"],
    currency: "Baht",
};

export {};