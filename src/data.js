export const API_KEY ='AIzaSyDWwEo9huw6zT6QWcU4CZuegz8p7f3Vi-4';
const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}