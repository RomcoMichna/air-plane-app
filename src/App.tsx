import { Container } from "react-bootstrap";
import InputForm from "./components/form/inputForm/InputForm";
import OutputTable from "./components/table/OutputTable";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";


const App = () => {

  const country = useSelector((state: RootState) => state.textInput.countriesValue);
  const airport = useSelector((state: RootState) => state.textInput.airportsValue);
  const metarBool = useSelector((state: RootState) => state.textInput.metarBool);
  const sigmetBool = useSelector((state: RootState) => state.textInput.sigmetBool);
  const tafBool = useSelector((state: RootState) => state.textInput.tafBool);

  const shouldDisplayOutputTable = (country || airport) && (metarBool || sigmetBool || tafBool);

  return (
    <Container className="p-4">
      <InputForm />
      {shouldDisplayOutputTable ? <OutputTable /> : <p>Please choose an option</p>}   
    </Container>
  )
}

export default App;

