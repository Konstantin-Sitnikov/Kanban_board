export function getTaskList(key:string) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key)!)
    } else {
        return []
    }
}


export function getCountID() {
    if (localStorage.getItem("countId")) {
        return JSON.parse(localStorage.getItem("countId")!)
    } else {
        return 0
    }
}