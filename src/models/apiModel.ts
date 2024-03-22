export interface apiModels {
    id: string;
    method: string;
    params: {
      id: string;
      reportTypes: string[];
      stations: string[];
      countries: string[];
    }[];
}

export interface apiModelsExport {
    error: string;
    id: string;
    result: {
        queryType: string;
        stationId: string;
        text: string;
        reportTime: string;
    }[];
}