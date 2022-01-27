import { RouterScrollBehavior } from 'vue-router';

const navbarHeight = 74;
const offset = 48;

export const scrollBehaviorOptions: any = {
    left: 0,
    top: navbarHeight + offset,
    behavior: 'smooth'
};

export const scrollBehavior: RouterScrollBehavior = (to) => {
    if (to.hash) {
        return {
            el: to.hash,
            ...scrollBehaviorOptions
        };
    }

    return { top: 0, left: 0 };
};
