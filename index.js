import { CapacitorCookies } from '@capacitor/core';

export const persistCapacitorCookies = {
    async getItem(key) {
        return await CapacitorCookies.getCookies({ keys: [key] }).then((cookies) => cookies[key]);
    },
    async setItem(key, value) {
        return await CapacitorCookies.setCookie({ key, value })
    },
    async removeItem(key) {
        return await CapacitorCookies.deleteCookie({ key });
    },
}



