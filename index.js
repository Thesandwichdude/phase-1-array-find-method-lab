function superbowlWin(object){
    let item = object.find(record => record.result === "W");
    if (item === undefined) {
        return undefined
    }
    else{
    return item.year;
    }
}