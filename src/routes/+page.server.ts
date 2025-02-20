import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

let loaded = false;
export const load: PageServerLoad = async (event) => {
    if (loaded = true) {
       //redirect(302, '/order')
    }
    return {
        availableItems: [
            {
                id: 1,
                name: 'Гайка'
            },
            {
                id: 2,
                name: 'Шайба'
            },
            {
                id: 3,
                name: 'Болт'
            },
            {
                id: 4,
                name: 'Винт'
            },
            {
                id: 5,
                name: 'Шлейф'
            },
            {
                id: 6,
                name: 'Бруски'
            },
            {
                id: 7,
                name: 'Прокладки'
            },
        ]
    }
}

export const actions: Actions = {
    order: async (event) => {
        const form = await event.request.formData();
        let loaded = true;
        redirect(302, "/order");
    }
}