
export const currentTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    let formattedTime = hours + ':' + minutes;
  
    return formattedTime;
};