import { off, on } from '@inkline/inkline/helpers';

function matchParentWidth (element: HTMLElement) {
    const parentStyle = getComputedStyle(element.parentElement as any);
    const width = parseInt(parentStyle.width, 10);
    const padding = parseInt(parentStyle.paddingLeft, 10) + parseInt(parentStyle.paddingRight, 10);

    element.style.width = (width - padding) + 'px';
}

export default {
    beforeMount (element: HTMLElement) {
        on(window as any, 'resize', () => matchParentWidth(element));
    },
    beforeUnmount (element: HTMLElement) {
        off(window as any, 'resize', () => matchParentWidth(element));
    },
    mounted (element: HTMLElement) {
        matchParentWidth(element);
    }
};
