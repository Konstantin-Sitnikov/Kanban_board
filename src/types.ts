


export type DataFooter = {
    name?:string;
    year?: number;
    avatar?: any
    activeTasks: number;
    finishedTasks: number
}

export type DataMain = {
    setActiveTasks: void;
    setFinishedTasks: void
}

export type User = {
    name?:string;
    year?: number;
    avatar?: any
}


export type Items = {
    title?: string;
    description?: string;
}

export type Task = {
    id?:number
    title?: string;
    description?: string;
}


export type List = {
    listName: string,
    taskList: any,
    data?:any,
    setTaskList: any,    
}


export type TypeList = {
    listName:string,
    taskList:any, 
    dropdownList:any,
    setTaskList:any, 
    setDropdownList:any
}


export type DataTask = {
    [key:string]:any
}

