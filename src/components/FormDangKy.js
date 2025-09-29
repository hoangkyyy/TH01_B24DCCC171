import { useState } from "react";

function FormDangKy() {
  const [ten, setTen] = useState("");
  const [email, setEmail] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [loi, setLoi] = useState("");
  const [thongTin, setThongTin] = useState(null);

  const xuLyDangKy = (e) => {
    e.preventDefault();

    if (!ten || !email || !matKhau) {
      setLoi("⚠️ Vui lòng nhập đầy đủ thông tin!");
      setThongTin(null);
      return;
    }

    setLoi("");
    setThongTin({ ten, email, matKhau });
  };

  return (
    <div>
      <h3>Form Đăng ký</h3>
      <form onSubmit={xuLyDangKy} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 250 }}>
        <input
          type="text"
          placeholder="Tên"
          value={ten}
          onChange={(e) => setTen(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={matKhau}
          onChange={(e) => setMatKhau(e.target.value)}
        />
        <button type="submit">Đăng ký</button>
      </form>

      {loi && <p style={{ color: "red" }}>{loi}</p>}

      {thongTin && (
        <div style={{ marginTop: 20 }}>
          <h4>Thông tin đã nhập:</h4>
          <p>Tên: {thongTin.ten}</p>
          <p>Email: {thongTin.email}</p>
          <p>Mật khẩu: {thongTin.matKhau}</p>
        </div>
      )}
    </div>
  );
}

export default FormDangKy;
