interface IWorkspace {
    title: string;
    icon: string;
    channels: [];
    direct: [];

}

interface IStore {
    workspaсes: IWorkspace[];
    addChannel: Function; 
}

export const appStore: IStore = {
    workspaсes: [],

    addChannel () {
        
    }
}