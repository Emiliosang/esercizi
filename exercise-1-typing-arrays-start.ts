const currencies1: string[] = ["NZD", "THB", "NGN"];

const currencies2: Array<string> = ["EUR", "COP", "INR"];

const populations1: number[] = [50_372_424, 1_352_642_280, 211_400_708];

const populations2: Array<number> = [5_135_300, 331_893_745, 1_412_600_000];

interface Country {
    name: string;
    code: string;
    population: number;
}

const countries1: Country[] = [
    {
        name: "China",
        code: "CN",
        population: 1_412_600_000,
    },
    {
        name: "Italy",
        code: "IT",
        population: 60_317_116,
    },
];

const countries2: Array<Country> = [
    {
        name: "Thailand",
        code: "TH",
        population: 69_950_850,
    },
    {
        name: "Greece",
        code: "GR",
        population: 10_678_632,
    },
];

export {};