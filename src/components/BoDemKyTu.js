import { useState } from "react";

function BoDemKyTu() {
  const [vanBan, setVanBan] = useState("");
  const gioiHan = 100;
  const soKyTu = vanBan.length;
  const vuotGioiHan = soKyTu > gioiHan;

  return (
    <div>
      <h3>Bộ đếm ký tự</h3>
      <input
        type="text"
        placeholder="Nhập văn bản..."
        value={vanBan}
        onChange={(e) => setVanBan(e.target.value)}
        style={{ padding: 6, width: 250 }}
      />
      <p>Số ký tự: {soKyTu}</p>
      {vuotGioiHan && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Vượt quá {gioiHan} ký tự!
        </p>
      )}
    </div>
  );
}


export default BoDemKyTu;
