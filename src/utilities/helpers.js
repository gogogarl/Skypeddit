const helpers = {
  postDate: (epoch) => {
    const datetime = new Date(epoch * 1000);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = datetime.getFullYear();
    const month = months[datetime.getMonth()];
    const day = datetime.getDate();
    return `${month} ${day}, ${year}`;
  },
  postTime: (epoch) => {
    const datetime = new Date(epoch * 1000);
    let hours = datetime.getHours();
    let minutes = datetime.getMinutes();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = (`0${minutes}`).slice(-2);
    return `${hours}:${minutes} ${meridiem}`;
  },
  fixImageURL: (url) => decodeURI(url.replace(/&amp;/g, '&'))
}

export default helpers;