export const getEndNumber = (URL) => {
    const num = parseInt(URL.match(/\d+$/));
  
    if (isNaN(num)) return 0;
  
    return num;
}

export const getIds = (list = []) => {
    let value = '';
    for(let i = 0; i < list.length; i++){
        if(i == length-1){
            value+=`${getEndNumber(list[i])}`;
        }else{
            value+=`${getEndNumber(list[i])},`;
        }
    }
    return value;
}