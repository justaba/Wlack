import axios from "axios";

interface IStore {
    channels: string[];
    getChannels: Function
}

export const channelStore: IStore = {
    channels: [],
    getChannels () {
        
    }
}