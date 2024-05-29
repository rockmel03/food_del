import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Axios from "../utils/Axios";

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderid = searchParams.get("orderid");

  const verifyPayment = async () => {
    try {
      const response = await Axios.post(`/api/v1/order/${orderid}/verify`, {
        success,
      });
      if (response.data?.data?.paymentStatus) {
        navigate("/myorders");
      }
    } catch (error) {
      console.log(error.response)
      navigate("/");
    }
  };
  React.useEffect(() => {
    verifyPayment();
  }, []);
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="w-[8vh] h-[8vh] border-[3px] rounded-full border-t-zinc-500 animate-[spin_0.5s_linear_infinite]"></div>
    </div>
  );
};

export default Verify;
