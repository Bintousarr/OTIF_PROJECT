export interface DataComponent{
    photoUrl: string;
    date: string;
    hours: string;
    label: string;
    lieu: string;
    orateur: string
    orateurs: Orateurs[]
}

export interface Orateurs{
    photoUrl:string;
    name:string
}