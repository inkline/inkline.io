import { RouterScrollBehavior } from 'vue-router';

const navbarHeight = 76;
const offset = 32;

export const scrollBehaviorOptions: any = {
    left: 0,
    top: navbarHeight + offset,
    behavior: 'smooth'
};

export const scrollBehavior: RouterScrollBehavior = (to) => {
    console.log({ to });
    if (to.hash) {
        return {
            el: to.hash,
            ...scrollBehaviorOptions
        };
    }

    return { top: 0, left: 0 };
};
