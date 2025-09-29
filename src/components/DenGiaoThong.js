import { useEffect, useRef, useState } from "react";

function DenGiaoThong() {
  const DEN = ["do", "xanh", "vang"]; // thứ tự chuyển
  const [denHienTai, setDenHienTai] = useState("do");
  const idInterval = useRef(null);

  // Hàm đổi đèn thủ công
  const chuyenDen = () => {
    setDenHienTai((ht) => {
      const i = DEN.indexOf(ht);
      return DEN[(i + 1) % DEN.length];
    });
  };
  

  // Tự động đổi mỗi 2s
  useEffect(() => {
    idInterval.current = setInterval(chuyenDen, 2000);
    return () => clearInterval(idInterval.current);
    // eslint-disable-next-line
  }, []);

  // Hàm lấy màu
  const layMau = (ten) => {
    if (denHienTai === ten) {
      if (ten === "do") return "red";
      if (ten === "xanh") return "green";
      return "yellow";
    }
    return "#555"; // xám khi tắt
  };

  // Style bóng đèn
  const bong = (ten) => ({
    width: 70,
    height: 70,
    borderRadius: "50%",
    margin: "10px 0",
    background: layMau(ten),
    transition: "background .25s",
  });

  return (
    <div>
      <div style={{ display: "inline-block", marginBottom: 10 }}>
        <div style={bong("do")}></div>
        <div style={bong("vang")}></div>
        <div style={bong("xanh")}></div>
      </div>
      <br />
      <button onClick={chuyenDen}>Chuyển đèn</button>
    </div>
  );
}

export default DenGiaoThong;
