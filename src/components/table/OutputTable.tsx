import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { apiModels, apiModelsExport } from "../../models/apiModel";
import { useEffect, useMemo, useState } from "react";
import { fetchData } from "../../network/airPlane_api";
import { Col, Row, Table } from "react-bootstrap";
import { formatDate } from "../../utils/formatDate";
import { highlightText } from "../../utils/highlightText";
import { textChanged } from "../../utils/textChanged";


const OutputTable = () => {

  const [responseData, setResponseData] = useState<apiModelsExport>();

  const country = useSelector((state: RootState) => state.textInput.countriesValue);
  const airport = useSelector((state: RootState) => state.textInput.airportsValue);
  const metarBool = useSelector((state: RootState) => state.textInput.metarBool);
  const sigmetBoo = useSelector((state: RootState) => state.textInput.sigmetBool);
  const tafBool = useSelector((state: RootState) => state.textInput.tafBool);

  // metar, segmet, taf bool value changed to text value
  const userReportTypes = useMemo(() => {
    const types = [];
    if (metarBool) types.push("METAR");
    if (sigmetBoo) types.push("SIGMET");
    if (tafBool) types.push("TAF_LONGTAF");
    return types;
  }, [metarBool, sigmetBoo, tafBool]);

  // airport string changed to array
  const airportsSearchChangedValue = useMemo(() => {
    if (airport !== "") {
      return airport.split(" ");
    }
    return [];
  }, [airport]);

// country string changed to array
  const countrySearchChangedValue = useMemo(() => {
    if (country !== "") {
      return country.split(" ");
    }
    return [];
  }, [country]);

// Fetch data
useEffect(() => {
  const fetchDataAndUpdateState = async () => {
    const requestData: apiModels = {
      id: "id",
      method: "query",
      params: [
        {
          id: "briefing01",
          reportTypes: userReportTypes,
          stations: airportsSearchChangedValue,
          countries: countrySearchChangedValue,
        },
      ],
    };

    try {
      const responseData = await fetchData(requestData);
      setResponseData(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  fetchDataAndUpdateState();

}, [airportsSearchChangedValue, countrySearchChangedValue, userReportTypes]);

  return (
    <div>
    {responseData && responseData.result.map((item, index) => (
      <div key={index}>
        <Table>
          <thead>
            <tr>
              <th>{item.stationId}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Row>
                  <Col xs={3}>{textChanged(item.queryType)}</Col>
                  <Col xs={3}>{formatDate(item.reportTime)}</Col>
                  <Col xs={6}>{highlightText(item.text)}</Col>
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    ))}
  </div>
  )
}

export default OutputTable;
