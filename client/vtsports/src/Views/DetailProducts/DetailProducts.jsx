import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetail } from "../../Redux/actions";

const DetailProducts = () => {
  const { id } = useParams();
  //   console.log(id);
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.productDetail);
  console.log(detail);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);
  return <div>DetailProducts</div>;
};

export default DetailProducts;
