const getSrcFromsString = (str) => {
  const src = str.split('src="')[1]?.split('"')[0];
  return src || '';
};

export default getSrcFromsString;
