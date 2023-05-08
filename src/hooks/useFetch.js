import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState();
  const getData = () => {
    axios
      .get(url)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  };
  return [state, getData];
};

export default useFetch;
