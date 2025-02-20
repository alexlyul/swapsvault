interface IPasswordFull {
    name: string;
    username: string;
    password: string;
    url: string;
    tags: string[];
}

type IPasswordPublic = Pick<IPasswordFull, 'name' | 'username' | 'url'>;

export type {
    IPasswordFull,
    IPasswordPublic
};