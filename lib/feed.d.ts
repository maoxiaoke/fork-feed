import { Author, Extension, FeedOptions, Item, Namespace, ExtraItem } from "./typings";
export { Author, Extension, FeedOptions, Item, Namespace };
export declare class Feed {
    options: FeedOptions;
    items: Item[];
    categories: string[];
    contributors: Author[];
    extensions: Extension[];
    namespaces: Namespace[];
    extra: {
        [key: string]: ExtraItem;
    };
    constructor(options: FeedOptions);
    addItem: (item: Item) => number;
    addCategory: (category: string) => number;
    addContributor: (contributor: Author) => number;
    addExtension: (extension: Extension) => number;
    addNamespace: (namespace: Namespace) => number;
    addExtra: (key: string, value: ExtraItem) => any;
    atom1: () => string;
    rss2: () => string;
    json1: () => string;
}
