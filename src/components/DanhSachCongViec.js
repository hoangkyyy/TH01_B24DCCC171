import { useState } from "react";

function DanhSachCongViec() {
  const [nd, setNd] = useState("");     // nội dung đang nhập
  const [ds, setDs] = useState([]);     // mảng công việc {id, ten}

  const them = () => {
    const ten = nd.trim();
    if (!ten) return;                   // bỏ qua rỗng
    setDs((old) => [...old, { id: Date.now(), ten }]);
    setNd("");
  };

  const xoa = (id) => {
    setDs((old) => old.filter((cv) => cv.id !== id));
  };

  const nhapEnter = (e) => {
    if (e.key === "Enter") them();
  };

  return (
    <div>
      <h3>Danh sách công việc</h3>

      <input
        value={nd}
        onChange={(e) => setNd(e.target.value)}
        onKeyDown={nhapEnter}
        placeholder="Nhập công việc..."
        style={{ padding: 6, marginRight: 8, width: 260 }}
      />
      <button onClick={them}>Thêm</button>

      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        {ds.map((cv) => (
          <li key={cv.id} style={{ marginBottom: 6 }}>
            {cv.ten}
            <button
              onClick={() => xoa(cv.id)}
              style={{ marginLeft: 10 }}
              aria-label={`Xóa ${cv.ten}`}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      {ds.length === 0 && <p>Chưa có công việc nào.</p>}
    </div>
  );
}


export default DanhSachCongViec;
