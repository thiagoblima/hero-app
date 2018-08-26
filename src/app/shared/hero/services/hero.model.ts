export interface HeroModel {
    id: number;
    name: string;
    alterEgo: string;
    likes: number;
    default: boolean;
}

export class Hero implements HeroModel {
    public id;
    public name;
    public alterEgo;
    public likes;
    public default;

    constructor({ ...attr }) {
        this.id = attr.id;
        this.name = attr.name;
        this.alterEgo = attr.alterEgo;
        this.likes = attr.likes;
        this.default = attr.default;
    }
}
