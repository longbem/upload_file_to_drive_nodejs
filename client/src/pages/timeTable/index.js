import React, { useEffect, useState, useMemo } from 'react';
// import readXlsxFile from 'read-excel-file/node'
import XLSX from 'xlsx';
import './calendar.css';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcXlsx from '@grapecity/wijmo.xlsx';

const TableWill = () => {
  return (
    <>
      <tr>
        <td rowspan="5">2</td>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </>
  )
}
const filename = require('./TKB-GV.xls');

const inputStyle = { width: '300px' };
function TimeTablePages() {
  const [workBook, setWorkBook] = useState(null);
  const [sheetIndex, setSheetIndex] = useState(-1);

  useEffect(() => {
    document.title = "Thời khoá biểu";
    console.log('dkm');
    document.getElementById('importFile').addEventListener('change', () => {
      loadWorkbook();
    });
    // // readXlsxFile('./TKB-GV.xls').then((rows) => {
    // //   console.log('rows', rows);
    // //   // `rows` is an array of rows
    // //   // each row being an array of cells.
    // // }).catch((error) => console.log('error', error));
    // try {
    //   // const book = XLSX.readFile(filename);
    //   // console.log('book', book);
    //   const reader = new FileReader();
    //   console.log('reader', reader);
    //   reader.onload = (evt) => {
    //     console.log('evt', evt);
    //     const bstr = evt.target.result;
    //     const wb = XLSX.read(bstr, { type: 'binary' });
    //   }
    // } catch (error) {
    //   console.log('error', error);
    // }
  }, []);

  //
  const drawSheet = (sheetIndex) => {
    let drawRoot = document.getElementById('tableHost');
    drawRoot.textContent = '';
    setSheetIndex(sheetIndex)
    drawWorksheet(workBook, sheetIndex, drawRoot, 200, 100);
  }

  //
  const loadWorkbook = () => {
    let reader = new FileReader();
    //
    reader.onload = (e) => {
        let workbook = new wjcXlsx.Workbook();
        workbook.loadAsync(reader.result, (result) => {
          setWorkBook(result);
            drawSheet(workBook?.activeWorksheet || 0);
        });
    };
    //
    let file = document.getElementById('importFile').files[0];
    if (file) {
        reader.readAsDataURL(file);
    }
  };

   //
  const drawWorksheet = (workbook, sheetIndex, rootElement, maxRows, maxColumns) => {
    //NOTES:
    //Empty cells' values are numeric NaN, format is "General"
    //
    //Excessive empty properties:
    //fill.color = undefined
    //
    // netFormat should return '' for ''. What is 'General'?
    // font.color should start with '#'?
    // Column/row styles are applied to each cell style, this is convenient, but Column/row style info should be kept,
    // for column/row level styling
    // formats conversion is incorrect - dates and virtually everything; netFormat - return array of formats?
    // ?row heights - see hello.xlsx
    if (!workbook || !workbook.sheets || sheetIndex < 0 || workbook.sheets.length == 0) {
        return;
    }
    //
    sheetIndex = Math.min(sheetIndex, workbook.sheets.length - 1);
    //
    if (maxRows == null) {
        maxRows = 200;
    }
    //
    if (maxColumns == null) {
        maxColumns = 100;
    }
    //
    // Namespace and XlsxConverter shortcuts.
    let sheet = workbook.sheets[sheetIndex], defaultRowHeight = 20, defaultColumnWidth = 60, tableEl = document.createElement('table');
    //
    tableEl.border = '1';
    tableEl.style.borderCollapse = 'collapse';
    //
    let maxRowCells = 0;
    for (let r = 0; sheet.rows && r < sheet.rows.length; r++) {
        if (sheet.rows[r] && sheet.rows[r].cells) {
            maxRowCells = Math.max(maxRowCells, sheet.rows[r].cells.length);
        }
    }
    //
    // add columns
    let columns = sheet.columns || [], invisColCnt = columns.filter(col => col.visible === false).length;
    //
    if (sheet.columns) {
        maxRowCells = Math.min(Math.max(maxRowCells, columns.length), maxColumns);
        //
        for (let c = 0; c < maxRowCells; c++) {
            let col = columns[c];
            //
            if (col && !col.visible) {
                continue;
            }
            //
            let colEl = document.createElement('col');
            tableEl.appendChild(colEl);
            let colWidth = defaultColumnWidth + 'px';
            if (col) {
                importStyle(colEl.style, col.style);
                if (col.autoWidth) {
                    colWidth = '';
                }
                else if (col.width != null) {
                    colWidth = col.width + 'px';
                }
            }
            colEl.style.width = colWidth;
        }
    }
    //
    // generate rows
    let rowCount = Math.min(maxRows, sheet.rows.length);
    for (let r = 0; sheet.rows && r < rowCount; r++) {
        let row = sheet.rows[r], cellsCnt = 0; // including colspan
        //
        if (row && !row.visible) {
            continue;
        }
        //
        let rowEl = document.createElement('tr');
        tableEl.appendChild(rowEl);
        //
        if (row) {
            importStyle(rowEl.style, row.style);
            if (row.height != null) {
                rowEl.style.height = row.height + 'px';
            }
            //
            for (let c = 0; row.cells && c < row.cells.length; c++) {
                let cell = row.cells[c], cellEl = document.createElement('td'), col = columns[c];
                //
                if (col && !col.visible) {
                    continue;
                }
                //
                cellsCnt++;
                //
                rowEl.appendChild(cellEl);
                if (cell) {
                    importStyle(cellEl.style, cell.style);
                    let value = cell.value;
                    //
                    if (!(value == null || value !== value)) { // TBD: check for NaN should be eliminated
                        if (wjcCore.isString(value) && value.charAt(0) == "'") {
                            value = value.substr(1);
                        }
                        let netFormat = '';
                        if (cell.style && cell.style.format) {
                            netFormat = wjcXlsx.Workbook.fromXlsxFormat(cell.style.format)[0];
                        }
                        let fmtValue = netFormat ? wjcCore.Globalize.format(value, netFormat) : value;
                        cellEl.innerHTML = wjcCore.escapeHtml(fmtValue);
                    }
                    //
                    if (cell.colSpan && cell.colSpan > 1) {
                        cellEl.colSpan = getVisColSpan(columns, c, cell.colSpan);
                        cellsCnt += cellEl.colSpan - 1;
                        c += cell.colSpan - 1;
                    }
                    //
                    if (cell.note) {
                        wjcCore.addClass(cellEl, 'cell-note');
                        cellEl.title = cell.note.text;
                    }
                }
            }
        }
        //
        // pad with empty cells
        let padCellsCount = maxRowCells - cellsCnt - invisColCnt;
        for (let i = 0; i < padCellsCount; i++) {
            rowEl.appendChild(document.createElement('td'));
        }
        //
        if (!rowEl.style.height) {
            rowEl.style.height = defaultRowHeight + 'px';
        }
    }
    //
    // do it at the end for performance
    rootElement.appendChild(tableEl);
  };

  //
  const getVisColSpan = (columns, startFrom, colSpan) => {
    let res = colSpan;
    //
    for (let i = startFrom; i < columns.length && i < startFrom + colSpan; i++) {
        let col = columns[i];
        if (col && !col.visible) {
            res--;
        }
    }
    //
    return res;
  }

  //
  const importStyle = (cssStyle, xlsxStyle) => {
    if (!xlsxStyle) {
        return;
    }
    //
    if (xlsxStyle.fill) {
        if (xlsxStyle.fill.color) {
            cssStyle.backgroundColor = xlsxStyle.fill.color;
        }
    }
    //
    if (xlsxStyle.hAlign && xlsxStyle.hAlign != wjcXlsx.HAlign.Fill) {
        cssStyle.textAlign = wjcXlsx.HAlign[xlsxStyle.hAlign].toLowerCase();
    }
    //
    let font = xlsxStyle.font;
    if (font) {
        if (font.family) {
            cssStyle.fontFamily = font.family;
        }
        if (font.bold) {
            cssStyle.fontWeight = 'bold';
        }
        if (font.italic) {
            cssStyle.fontStyle = 'italic';
        }
        if (font.size != null) {
            cssStyle.fontSize = font.size + 'px';
        }
        if (font.underline) {
            cssStyle.textDecoration = 'underline';
        }
        if (font.color) {
            cssStyle.color = font.color;
        }
    }
  }

  const lists = useMemo(() => {
    let _list = [];
    console.log('workBook', workBook);
    if (workBook !== null) {
      _list = workBook?.sheets.map((sheet, index) => {
        return <li role="presentation" className={index === sheetIndex ? 'active' : ''}>
            <a href="#" onClick={e => { e.preventDefault(); drawSheet(index); }}>{sheet.name}</a>
        </li>;
    });
    }
    return _list;
  }, [workBook]);

  return (
    <div className="time-table-container">
      <h1>Thời khoá biểu: Trường THPT xxx</h1>
      <h4>Thời khoá biểu khối 10</h4>
      <table className="time-table">
        <tr>
          <th>Thứ</th>
          <th>Tiết</th>
          <th>10A1</th>
          <th>10A2</th>
          <th>10A3</th>
          <th>10A4</th>
          <th>10A5</th>
          <th>10A6</th>
        </tr>
       {/* <TableWill /> */}
      </table>
      <div className="container-fluid">
            <div className="row">
                <input type="file" className="form-control" id="importFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel.sheet.macroEnabled.12" style={inputStyle}/>
            </div>

            <ul className="nav nav-tabs">
                {lists}
            </ul>

            <div id="tableHost"></div>
        </div>
    </div>
  );
}

export { TimeTablePages };
