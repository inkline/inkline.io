import { Component } from 'vue';

export interface AppsPage {
    title: string;
    url?: string;
    icon?: string;
    color?: string;
    external?: boolean;
}

export interface NavigationPage {
    name?: string;
    title?: string;
    url?: string;
    navigation?: {
        next?: string;
        previous?: string;
    };
    id?: string;
    classes?: string[];
    active?: RegExp;
    hidden?: boolean | { mobile?: boolean; desktop?: boolean };
    index?: boolean;
    children?: Omit<NavigationPage, 'active'>[];
    component?: Component;
    componentProps?: Record<string, unknown>;
}

export interface CollapsibleNavigationPage extends NavigationPage {
    id?: string;
    current?: boolean;
}
