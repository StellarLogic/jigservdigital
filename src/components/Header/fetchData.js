import React, { useState, useEffect } from "react";
import Axios from "../../utils/Axios";

const useFetchData = () => {
  const [categories, setcategories] = useState(null);
  const [universities, setuniversities] = useState(null);

  React.useEffect(() => {
    Axios.getCategories()
      .then((data) => setcategories({ ...categories, ...data, loading: false }))
      .catch((err) => {
        if (err) {
          return setcategories({ ...categories, data: [], loading: true });
        }
      });
    Axios.getUniversities()
      .then((data) =>
        setuniversities({
          ...universities,
          top: data.top.data,
          others: data.others.data,
          loading: false,
        })
      )
      .catch((err) => {
        if (err) {
          return setuniversities({
            ...universities,
            top: [],
            others: [],
            loading: true,
          });
        }
      });
  }, []);

  return { categories, universities };
};

export default useFetchData;
