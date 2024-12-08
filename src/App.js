import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import { DescribingTheUI } from './Sections/DescribingTheUI/DescribingTheUI';
import { AddingInteractivity } from './Sections/AddingInteractivity/AddingInteractivity';
// import ManagingState from './Sections/ManagingState';
// import EscapeHatches from './Sections/EscapeHatches';
import { YourFirstComponent } from './Sections/DescribingTheUI/YourFirstComponent';
import { ImportExportComponents } from './Sections/DescribingTheUI/ImportExportComponents';
import { Navbar } from './Sections/Navbar';

const Layout = () => {
    return (
      <div>
        {/* <Navbar /> */}
        <Outlet />
      </div>
    )
}

function App() {
  return (
    <div>
      <h1> Hejsan </h1>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="describing-the-ui" element={<DescribingTheUI />}>
          {/* Subsektioner */}
          <Route path="your-first-component" element={<YourFirstComponent />} />
          <Route path="import-export-component" element={<ImportExportComponents />} />
        </Route>
        <Route path="adding-interactivity" element={<AddingInteractivity />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
