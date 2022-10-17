import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
// 유저는 메뉴와 상품들을 볼 수 있다.
// 유저는 로그인을 할 수 있다.
// 유저는 상품디테일을 보기 위해 로그인을 해야한다.
// 로그인한 유저는 상품디테일정보를 볼 수 있다.
// 유저는 상품을 검색할 수 있다.
// 유저는 로그아웃할 수 있다.
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
