
import { useMemo, useState } from "react";
import SanPham from "./SanPham";

function GioHang() {
  const dsSanPham = [
    { id: 1, ten: "Sản phẩm A", gia: 100 },
    { id: 2, ten: "Sản phẩm B", gia: 200 },
    { id: 3, ten: "Sản phẩm C", gia: 300 },
  ];

  const [gio, setGio] = useState([]); // [{id, ten, gia, soLuong}]

  const themVaoGio = (sp) => {
    setGio((old) => {
      const co = old.find((x) => x.id === sp.id);
      if (co) {
        return old.map((x) =>
          x.id === sp.id ? { ...x, soLuong: x.soLuong + 1 } : x
        );
      }
      return [...old, { ...sp, soLuong: 1 }];
    });
  };

  const tongSo = useMemo(() => gio.reduce((s, x) => s + x.soLuong, 0), [gio]);
  const tongTien = useMemo(
    () => gio.reduce((s, x) => s + x.gia * x.soLuong, 0),
    [gio]
  );

  return (
    <div>
      <h3>
        Giỏ hàng: {tongSo} sản phẩm – Tổng tiền: {tongTien}đ
      </h3>

      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        {dsSanPham.map((sp) => (
          <SanPham key={sp.id} sp={sp} themVaoGio={themVaoGio} />
        ))}
      </div>

      {gio.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h4>Trong giỏ</h4>
          <ul>
            {gio.map((x) => (
              <li key={x.id}>
                {x.ten} x{x.soLuong} = {x.gia * x.soLuong}đ
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GioHang;
