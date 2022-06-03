export enum CATEGORY {
    Home = 1,
    Work = 2,
    Study = 3

}

export interface Task {
    id?: number;
    text: string;
    day: Date;
    category : CATEGORY;
    reminder: boolean;
}