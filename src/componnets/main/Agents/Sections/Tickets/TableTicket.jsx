import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function createData(
  ID,
  subject,
  category,
  fkUser,
  dateInitial,
  status,
  dateUpdate,
  priority,
  dateClose,
  timeSolution
) 
{
  return {
    ID,
    subject,
    category,
    fkUser,
    dateInitial,
    status,
    dateUpdate,
    priority,
    dateClose,
    timeSolution,
  };
}



let rows = [
  createData(1,"Problemas de Conexion","Wifi",1,"2022-06-11","Abierto","2022-07-12","Alta","2022-07-12","1 Mes 6 Hrs"),
  createData(2,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Media","2022-07-11","2 días con 3 hrs"),
  createData(3,"SAP","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(4,"RED","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
  createData(5,"Excel","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
  createData(6,"WORD","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
  createData(7,"Wifi","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
  createData(8,"Corte","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Media","2022-07-11","2 días con 3 hrs"),
  createData(9,"Red","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Media","2022-07-11","2 días con 3 hrs"),
  createData(10,"Excel","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(11,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(12,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(13,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(14,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(15,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
  createData(16,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    
];

let Originrows = [
    createData(1,"Problemas de Conexion","Wifi",1,"2022-06-11","Abierto","2022-07-12","Alta","2022-07-12","1 Mes 6 Hrs"),
    createData(2,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Media","2022-07-11","2 días con 3 hrs"),
    createData(3,"SAP","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(4,"RED","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
    createData(5,"Excel","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
    createData(6,"WORD","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
    createData(7,"Wifi","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Alta","2022-07-11","2 días con 3 hrs"),
    createData(8,"Corte","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Media","2022-07-11","2 días con 3 hrs"),
    createData(9,"Red","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Media","2022-07-11","2 días con 3 hrs"),
    createData(10,"Excel","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(11,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(12,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(13,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(14,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(15,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
    createData(16,"Problemas con la impresora","Impresora",2,"2022-07-08","Cerrado","2022-07-11","Baja","2022-07-11","2 días con 3 hrs"),
      
  ];



  function filtrar(filterCamp){
    const Result = Originrows.filter((e)=>{if(e.category.toString().toLowerCase().includes(filterCamp.toLowerCase()) || e.subject.toString().toLowerCase().includes(filterCamp.toLowerCase()) || e.fkUser.toString().toLowerCase().includes(filterCamp.toLowerCase()))
    {
        return e
    }
    else return null

    })
    rows = Result
  }
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "ID",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "subject",
    numeric: true,
    disablePadding: false,
    label: "Asunto",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Categoria",
  },
  {
    id: "fkUser",
    numeric: true,
    disablePadding: false,
    label: "Solicitante",
  },
  {
    id: "dateInitial",
    numeric: true,
    disablePadding: false,
    label: "Fecha de Solicitud",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Estatus",
  },
  {
    id: "dateUpdate",
    numeric: true,
    disablePadding: false,
    label: "Ultima Actulización",
  },
  {
    id: "priority",
    numeric: true,
    disablePadding: false,
    label: "Prioridad",
  },
  {
    id: "dateClose",
    numeric: true,
    disablePadding: false,
    label: "Fecha de Cierre",
  },
  {
    id: "timeSolution",
    numeric: true,
    disablePadding: false,
    label: "Tiempo de solución",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [search, setSearch] = useState("")
  const handleChange = (e)=>{
    setSearch (search => search = e.target.value)
    filtrar(search)
}
  const resetSearch = () => {
    setSearch("");
    rows= Originrows
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Paper square sx={{ display: "flex", width:"50%" }}>
              <InputBase
              size="small"
                sx={{ ml: 1, flex: "1" }}
                value={search}
                onChange={e=>handleChange(e)}
                placeholder="Necesito..."
                inputProps={{ "aria-label": "¿Como puedo ayudarte?" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" onClick={resetSearch}>
                <SearchIcon />
              </IconButton>
            </Paper>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={(e) => alert("Borrado")}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <></>
      )}
    </Toolbar>
  );
};

export default function Recently({typeTable}) {
  
  const [type, setType] = useState(typeTable)
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("ID");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.ID);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, ID) => {
    const selectedIndex = selected.indexOf(ID);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, ID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (ID) => selected.indexOf(ID) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

 
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length}  />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.ID);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.ID)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.ID}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.ID}
                      </TableCell>
                      <TableCell align="right">{row.subject}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.fkUser}</TableCell>
                      <TableCell align="right">{row.dateInitial}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.dateUpdate}</TableCell>
                      <TableCell align="right">{row.priority}</TableCell>
                      <TableCell align="right">{row.dateClose}</TableCell>
                      <TableCell align="right">{row.timeSolution}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Contraer"
      />
    </Box>
  );
}
