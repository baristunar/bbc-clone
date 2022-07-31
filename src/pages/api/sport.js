import axios from 'axios';
const htmlparser2 = require('htmlparser2');
import { API_URLS } from '../../constants/api-urls';
import getSrcFromString from '../../utils/getSrcFromString';

const fetchSport = async (req, res) => {
  const response = await axios.get(API_URLS.sport);
  const parsedData = await htmlparser2.parseFeed(response.data);

  const items = parsedData.items.map((item) => {
    const image = getSrcFromString(item?.description);

    return {
      ...item,
      image
    };
  });

  return res.status(200).json({
    ...parsedData,
    items
  });
};

export default fetchSport;
