export type User = {
    name?:string;
    year?: number;
    avatar?: any
}


export type Items = {
    title?: string;
    description?: string;
}


export type List = {
    listName: string,
    dataList: any
}

export type Mock = {
    [key:string]:any
 }