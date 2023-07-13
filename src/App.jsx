import './App.css'
import {useState, useEffect, useRef} from 'react'
import axiso from "@/api/axiso.js";
import VmsDsplCell from "@/VmsDsplCell.jsx";
import {Grid, GridColumn, GridToolbar} from "@progress/kendo-react-grid";
import {ExcelExport, ExcelExportColumn} from '@progress/kendo-react-excel-export';


function App() {
    const [vmsData, setVmsData] = useState([]);
    const _export = useRef(null);

    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save();
        }
    };
    const params = {
        "take": 10,
        "sort": [
            // {
            //     "dir":"desc",
            //     "field":"pswdUpdDt"
            // }
        ],
        "filter": [
            // {
            //     "field":"fcltsGrpId",
            //     "value":"2",
            //     "operator":"eq"
            // }
        ]

    }

    const getData = async () => {
        const res = await axiso.post("vmsLogs", params);
        console.log(res.data);
        const items = res.data.items;
        setVmsData(items);
    }

    useEffect(() => {
        getData();
    }, []);

    return <ExcelExport data={vmsData} ref={_export}>
        <Grid
            style={{
                height: "400px",
            }}
            data={vmsData}
        >
            <GridToolbar>
                <button title="Export Excel"
                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                        onClick={excelExport}>
                    Export to Excel
                </button>
            </GridToolbar>
            <GridColumn field="clctDt" title="clctDt"/>
            <GridColumn field="dsplDt" title="dsplDt"/>
            <GridColumn field="dsplImgStr" title="dsplImgStr" cell={VmsDsplCell}/>
        </Grid>
    </ExcelExport>;
}

export default App
