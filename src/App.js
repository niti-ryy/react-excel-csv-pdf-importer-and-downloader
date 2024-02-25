import ImportComp from "./importComp";
import { PdfCreator } from "./pdfTest";
import Salary from "./salarySlipGenerator";


function App() {


  return (
    <div>
      <ImportComp/>
      <PdfCreator/>
      <Salary/>
    </div>
  );
}

export default App;
