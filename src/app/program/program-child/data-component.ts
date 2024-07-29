export interface DataComponent{
    photoUrl: string;
    date: string;
    hours: string;
    label: string;
    description: string;
    lieu: string;
    orateur: string
    orateurs: Orateurs[]
}

export interface Orateurs{
    photoUrl:string;
    name:string
}