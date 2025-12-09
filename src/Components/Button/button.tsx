

export function clickButton(e:any) {
    console.log(e.target.id)
}


function Button({id, onClick, children}:any) {
    return (
        <button id={id} onClick={onClick}>{children}</button>
    )
}


export default Button