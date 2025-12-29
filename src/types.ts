


export type DataFooter = {
    name?:string;
    year?: number;
    activeTasks: number;
    finishedTasks: number
}

export type DataMain = {
    setActiveTasks: Function
    setFinishedTasks: Function
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


export interface FormInput {
    list:[{id:number, titel:string, description:string}] | [];
    setTask: Function;
}

export interface DataDropdown {
    taskList: [{id:number, titel:string, description:string}] | [];
    dropdownList:[{id:number, titel:string, description:string}] | [];
    setTaskList: Function;
    setDropdownList:Function;

}