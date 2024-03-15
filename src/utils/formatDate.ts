const formatDate = (d: Date) => {
  const dateToFormat = new Date(d.toString());

  return `${
    dateToFormat.getMonth() + 1
  }/${dateToFormat.getDate()}/${dateToFormat.getFullYear()} ${dateToFormat.getHours()}:${dateToFormat.getMinutes()}`;
};

export default formatDate;
