import React, { useState } from "react";
import "./../style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VoucherForm = () => {
  const [voucher, setVoucher] = useState("");

  const handleVoucherChange = (e) => {
    setVoucher(e.target.value);
  };

  const handleApplyVoucher = () => {
    if (voucher === "sheryl") {
      toast.success("Tèn ten! Chúc bạn xài voucher vui vẻ ^^", {
        position: "top-right",
      });
    } else {
      toast.error("Voucher không đúng, vui lòng kiểm tra lại!", {
        position: "top-right",
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleApplyVoucher();
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">Voucher siêu cấp xịn xò</h2>

      <input
        className="input-field"
        type="text"
        placeholder="Nhập voucher..."
        value={voucher}
        onChange={handleVoucherChange}
        onKeyPress={handleKeyPress}
      />

      <button className="apply-button" onClick={handleApplyVoucher}>
        Áp dụng voucher
      </button>
    </div>
  );
};

export default VoucherForm;
