import React, { useEffect } from 'react';
import './calendar.css';

function TimeTablePages() {
  useEffect(() => {
    document.title = "Thời khoá biểu";
  }, []);
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
       <TableWill />
      </table>
    </div>
  );
}

export { TimeTablePages };
