


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



export type Task = {
    id?:number
    title?: string;
    description?: string;
}



export type TypeList = {
    listName: string,
    taskList: [{id:number, titel:string, description:string}] | [],
    setTaskList: Function, 
    dropdownList:[{id:number, titel:string, description:string}] | [],
    setDropdownList: Function,
}


export type DataTasks = {
    setActiveTasks: Function,
    setFinishedTasks: Function,
}

