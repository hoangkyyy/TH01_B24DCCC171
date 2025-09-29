
import BoDemKyTu from './components/BoDemKyTu';
import DenGiaoThong from './components/DenGiaoThong';
import DanhSachCongViec from './components/DanhSachCongViec';
import GioHang from './components/GioHang';
import FormDangKy from './components/FormDangKy';

function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>

      <h2>Bài 1: Bộ đếm ký tự</h2>
      <BoDemKyTu />

      <h2 style={{ marginTop: 40 }}>Bài 2: Đèn giao thông</h2>
      <DenGiaoThong />

      <h2 style={{ marginTop: 40 }}>Bài 3: Danh sách công việc</h2>
      <DanhSachCongViec />

      <h2 style={{ marginTop: 40 }}>Bài 4: Giỏ hàng</h2>
      <GioHang />

      <h2 style={{ marginTop: 40 }}>Bài 5: Form đăng ký</h2>
      <FormDangKy />
    </div>
  );
}

export default App;
