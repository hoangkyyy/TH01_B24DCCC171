
function SanPham({ sp, themVaoGio }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 6 }}>
      <h4>{sp.ten}</h4>
      <p>Giá: {sp.gia}đ</p>
      <button onClick={() => themVaoGio(sp)}>Thêm vào giỏ</button>
    </div>
  );
}

export default SanPham;
