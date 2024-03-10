import {BrowserRouter as Router} from "react-router-dom"
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import StudentNavBar from "./student/StudentNavBar";
import FacultyNavBar from "./faculty/FacultyNavBar";
function App() 
{
  return (
    <div className="App">

      <h2 align = 'center'><u>Student Grade Management System</u></h2>
      <Router>
           {/* <MainNavBar/>     */}
            <AdminNavBar/>   
         {/* <StudentNavBar/>  */}
          {/* <FacultyNavBar/> */}
      </Router>
      
    </div>
  );
}

export default App;
