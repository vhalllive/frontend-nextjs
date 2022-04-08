import { Constants } from "../../components/utils/Constants";
import React from "react";
import axios from "axios";

export default function Events() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
      .get(`${Constants.API}${Constants.EVENTS}${Constants.QUERY_POPULATE}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.attributes.Date}</h1>
          </div>
        ))}
    </div>
  )
}

