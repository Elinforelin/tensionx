import { useSelector } from 'react-redux';

import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SecondHeader from './components/SecondHeader';
import StudentsTable from './pages/StudentsTable';
import { selectCheckedStudents } from './store/students/select';
import { SelectedStudentsHeader } from './components/SelectedStudentsHeader/index';

function App() {
  const selectedStudents = useSelector(selectCheckedStudents)
  return (
    <div>
      <Header />
      <SecondHeader />
      {selectedStudents.length ? (
        <SelectedStudentsHeader />
      ) : (<SearchBar />)}
      <StudentsTable />
    </div>
  );
}

export default App;
