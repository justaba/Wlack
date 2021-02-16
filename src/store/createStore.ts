import { appStore } from "./AppStore";
import { authStore } from "./AuthStore";
import { channelStore } from "./ChannelStore";
import { chatStore } from "./ChatStore";

export function createStore() {
    return {
        ...authStore,
        ...appStore,
        ...channelStore,
        ...chatStore
    }
}

export type TStore = ReturnType<typeof createStore>