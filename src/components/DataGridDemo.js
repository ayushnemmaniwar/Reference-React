import  React,{useState} from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
    const [id,setId]=useState();
    const [lname,setLname]=useState();
    const [fname,setFname]=useState();
    const [age,setAge]=useState();
    const [items,setItems]=useState(rows);
    function Adddata(e)
    {
        e.preventDefault();
     let data=[].concat(rows);
     let x={
         id,
         lastName:lname,
         firstName:fname,
         age
     }
     data.push(x);
     setItems(data);  
    }
    return (
    <div>
        <form onSubmit={Adddata}>
            <input type="number"  onChange={(e)=> setId(e.target.value)}/>
            <input type="text"  onChange={(e)=> setLname(e.target.value)}/>
            <input type="text"  onChange={(e)=> setFname(e.target.value)}/>
            <input type="number"  onChange={(e)=> setAge(e.target.value)}/>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
      <div className="container-fluid" style={{ margin: 100 }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
