import type {IPasswordFull} from "../types/IPassword";

export async function savePassword(password: IPasswordFull): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Password saved', password);
            resolve();
        }, 1000);
    });
}

export async function getPasswords(): Promise<IPasswordFull[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    name: 'Facebook',
                    username: 'john.doe',
                    password: '123456',
                    url: 'https://facebook.com',
                    tags: ['social']
                },
                {
                    name: 'Google',
                    username: 'john.doe',
                    password: '123456',
                    url: 'https://google.com',
                    tags: ['search']
                },
                {
                    name: 'Twitter',
                    username: 'john.doe',
                    password: '123456',
                    url: 'https://twitter.com',
                    tags: ['social']
                },
            ]);
        }, 1000);
    });
}