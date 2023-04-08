export interface AppsPage {
    title: string;
    url?: string;
    icon?: string;
    color?: string;
    external?: boolean;
}

export interface NavigationPage {
    title: string;
    url?: string;
    navigation?: {
        next?: string;
        previous?: string;
    };
    id?: string;
    classes?: string[];
    active?: RegExp;
    hidden?: boolean;
    index?: boolean;
    children?: Omit<NavigationPage, 'active'>[];
}

export interface CollapsibleNavigationPage extends NavigationPage {
    id?: string;
    current?: boolean;
}
