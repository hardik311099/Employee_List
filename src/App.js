import "./App.css";
import From from "./components/FromView/From";
import EmployeeGridView from "./components/GridView/Employee_Grid_View";
import EmployeeListView from "./components/ListView/Employee_List_View";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <EmployeeGridView />
      <EmployeeListView />
      <From />
    </div>
  );
}

export default App;
