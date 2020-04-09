import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import AddRowButtonWrapper from './AddRowButtonWrapper';
import AddRowButton from './AddRowButton'

import AddColumnButtonWrapper from './AddColumnButtonWrapper';
import AddColumnButton from './AddColumnButton';

import DeleteRowButtonWrapper from './DeleteRowButtonWrapper';
import DeleteRowButton from './DeleteRowButton';

import DeleteColumnButtonWrapper from './DeleteColumnButtonWrapper';
import DeleteColumnButton from './DeleteColumnButton';

import Td from './Td';
import TableStyle from '../components/TableStyle';

const generateTable = (width, height) => {
  const table = [];

  for (let i = 0; i < width; i++) {
    table.push({ rowId: i, cells: [] })

    for (let j = 0; j < height; j++) {
      table[i].cells.push(Math.random())
    }
  }

  return table;
}

const generateRow = (width) => {
  let arrTrs = Array(width);

  for (let j = 0; j < arrTrs.length; j++) {
    arrTrs[j] = Math.random()
  }

  const row = { 
    rowId: Math.random(),
    cells: arrTrs,
  };

  return row;
}

const Table = (
  { initialWidth, initialHeight, cellSize }
) => {
  const [table, setTable] = useState(generateTable(initialWidth, initialHeight));
  const [activeColIndex, setActiveColIndex] = useState(0);
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [isDeleteRowButtonHidden, setDeleteRowButtonHidden] = useState(false);
  const [isDeleteColumnButtonHidden, setDeleteColumnButtonHidden] = useState(false);
  const [tableWidth, setTableWidth] = useState(0);
  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    setTableWidth(table[table.length-1].cells.length);
    setTableHeight(table.length)
  }, [table])
  
  const addRow = () => {
    setTable(
      [...table,generateRow(tableWidth)]
    )
  }

  const addColumn = () => {
    setTable(
      table.map((el) => {
        return {
          rowId: el.rowId,
          cells: [...el.cells, Math.random()],
        }
      })
    )
  }
  
  const deleteRow = () => {    
    setTable(
      table.filter((_,i) => i !== activeRowIndex)
    )
  };

  const deleteColumn = () => {
    setTable(
      table.map((row) => ({
        ...row,
        cells: row.cells.filter((_,i) => i !== activeColIndex)
      }))
    )
  };

  const isOnlyOneRow = () => (table.length === 1);
  const isOnlyOneColumn = () => (table.every(({cells}) => cells.length === 1));

  return (
    <>
      <TableStyle
        onMouseEnter={
          () => {
            if(isOnlyOneRow()){
              setDeleteRowButtonHidden(true)
            } else {
              setDeleteRowButtonHidden(false)
            }

            if(isOnlyOneColumn()){
              setDeleteColumnButtonHidden(true)
            } else {
              setDeleteColumnButtonHidden(false)
            }
          }
        }
      >
        <thead></thead>
        <tbody>
          {
            table.map((tr, targetRowIndex) => (
              <tr 
                key={tr.rowId}
              >
                {
                  tr.cells.map((value, targetColumnIndex) => (
                    <Td 
                      onMouseOver={
                        () => {
                          setActiveColIndex(targetColumnIndex);
                          setActiveRowIndex(targetRowIndex);
                        }
                      }
                      key={value}>
                    </Td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </TableStyle>
      
      <AddRowButtonWrapper>
        <AddRowButton 
          id='addRowButton' 
          addRow={addRow} 
          tableHeight={tableHeight}
        />
      </AddRowButtonWrapper>

      <AddColumnButtonWrapper>
            <AddColumnButton
              id='addColumnButton' 
              addColumn={addColumn}
              tableWidth={tableWidth}
            >
              +
            </AddColumnButton>
          </AddColumnButtonWrapper>
        
      <ThemeProvider theme={
        { 
          colIndex: activeColIndex, 
          rowIndex: activeRowIndex, 
          cellSize, 
          isDeleteRowButtonHidden,
          isDeleteColumnButtonHidden 
        }
      } >

        <DeleteColumnButtonWrapper 
          onClick={
            ()=>{
              deleteColumn();
              setDeleteColumnButtonHidden(true);            
            }
          }
          >
          <DeleteColumnButton 
            id='deleteColumnButton' 
            tableWidth={tableWidth}
            isOnlyOneColumn={isOnlyOneColumn}
            isDeleteColumnButtonHidden={isDeleteColumnButtonHidden}
          />
        </DeleteColumnButtonWrapper>

        <DeleteRowButtonWrapper 
          onClick={
            ()=>{
              deleteRow();
              setDeleteRowButtonHidden(true);
            }
          }
          >
          <DeleteRowButton 
            id='deleteRowButton' 
            tableHeight={tableHeight}
            isOnlyOneRow={isOnlyOneRow}
            isDeleteRowButtonHidden={isDeleteRowButtonHidden}
          />
        </DeleteRowButtonWrapper>

      </ThemeProvider> 
    </>
  );
}

Table.propTypes = {
  initialWidth: PropTypes.number.isRequired, 
  initialHeight: PropTypes.number.isRequired, 
  cellSize: PropTypes.number.isRequired,
};

export default Table;
