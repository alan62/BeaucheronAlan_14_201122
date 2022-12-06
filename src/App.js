import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import EmployeeList from './pages/EmployeeList/EmployeeList'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/EmployeeList"
            element={<EmployeeList />}
          />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
