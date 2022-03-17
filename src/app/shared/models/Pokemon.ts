export class Pokemon {
    id !: number;
    name !: string;
    types !: Array < string >;
    height !: number;
    weight !: number;
    description !: string;
    imageURL !: string;
    hasEvolution !: boolean;
    evolutionFamilyId !: number;
}
