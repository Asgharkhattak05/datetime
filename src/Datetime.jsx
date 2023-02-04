


function Date(){
    let date=new Date()
    let newDate=date.toLocaleDateString()
    return newDate
}
function Time(){
    let time=new Date()
    let newTime=time.toLocaleTimeString()
    return (newTime)
}

export {Date, Time}