interface IStore {
    isLogged: boolean;
    token: string|null;
    user: {
        name: string;
        avatar: string;
    }|null

}

export const authStore: IStore = {
    isLogged: false,
    token: null,
    user: null
}