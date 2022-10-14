let currdate=function(){
    let  date= new Date()
    return date
 
}

let currMonth=function(){
    let  date= new Date()
    let month =date.getMonth()
    return month+1
}  
let getBatchInfo=function(){
    let info="Lithium"+","+"W3"+","+"D3"+","+"the topic for the today is Nodejs module system"
    return info
}

module.exports.currdate=currdate;
module.exports.currMonth=currMonth;
module.exports.getBatchInfo=getBatchInfo;



