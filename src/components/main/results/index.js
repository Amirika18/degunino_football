import React, { useEffect, useState } from "react";
import './results.css';
import { useDispatch } from "react-redux";
import { setData } from "../../../redux/tableSlice";
import { tableDataChangeRequest } from "../../../requests";

export const ResultsMain = ({isAdminMode, tableRows}) => {
    const [rows, setRows] = useState([]);
    const [currentRows, setCurrentRows] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (tableRows && tableRows.length && Array.isArray(tableRows)) {
            setRows([...tableRows]);
            setCurrentRows([...tableRows]);
        }
    }, [tableRows])

    useEffect(() => {
        setIsEditMode(false);
    }, [tableRows, isAdminMode]);

    const canEdit = isAdminMode && isEditMode;

    const changeRows = (value, name, field) => {
        const tempRows = [...rows];

        tempRows.forEach(row => {
            if (row.name === name && value) {
                row[field] = value;  
                setRows([...tempRows]);
            }
        })
    }

    const deleteRow = (name) => {
        rows.forEach((row, index) => {
            if (row.name === name) {
                setRows([...rows.slice(0, index), ...rows.slice(index + 1, rows.length)]);    
            }
        })
    }

    const getRowsToEdit = (rows) => {
        return rows.map(row => {
            return <tr key={row.name} className="results-table-row">
                {
                    Object.keys(row).map(field => {
                        return <td key={row.name + field} className="results-table-cell">
                            <input 
                                className="result-table-cell-input" 
                                defaultValue={row[field]}   
                                onBlur={(e) => changeRows(e.target.value, row.name, field)}
                            ></input>
                        </td>
                    })
                }
                <td className="results-table-cell">
                    <div className="delete-button" onClick={() => deleteRow(row.name)}> 
                        Удалить
                    </div>
                </td>
            </tr>
        })
    }

    const getRows = (rows) => {
        return rows.map(row => {
            return <tr key={row.name} className="results-table-row">
                {
                    Object.keys(row).map(field => {
                        return <td key={row.name + field} className="results-table-cell">{row[field]}</td>
                    })
                }
            </tr>
        })
    }

    const saveRows = () => {
        setCurrentRows([...rows]);
        dispatch(
            setData([...rows])
        );
        tableDataChangeRequest({
            data: [...rows]
        });
        setIsEditMode(false);
    }

    const cancelEditing = () => {
        setRows([...currentRows]);
        setIsEditMode(false);
    }

    const addEmptyRow = () => {
        const tempRows = rows;
        tempRows.push({
            name: '',
            games: 0,
            win: 0,
            lose: 0,
            draw: 0,
            winRatio: 0,
            score: 0
        })
        
        setRows([...tempRows]);
    }

    const startEditing = () => {
        setIsEditMode(true);
    }

    return <div className='results'>
        <div className="results-table">
            <table className="results-table">
                <thead>
                    <tr className="results-table-row-header">
                        <th scope="col" className="results-table-cell">Название команды</th>
                        <td className="results-table-cell">Игр сыграно</td>
                        <td className="results-table-cell">Побед</td>
                        <td className="results-table-cell">Ничьих</td>
                        <td className="results-table-cell">Поражений</td>
                        <td className="results-table-cell">Процент побед</td>
                        <td className="results-table-cell">Очки</td>
                        {canEdit && <td className="results-table-cell">Удалить</td>}
                    </tr>
                </thead>
                <tbody>
                    {canEdit ? getRowsToEdit(rows) : getRows(rows)}
                </tbody>
            </table>
        </div>
        {canEdit && <div className="save-buttons">
                <div className="save-button" onClick={addEmptyRow}>Добавить строку</div>
                <div className="save-button" onClick={saveRows}>Сохранить</div>
                <div className="cancel-button" onClick={cancelEditing}>Отмена</div>
            </div>
        }
        {isAdminMode && !isEditMode && <div className="edit-buttons">
                <div className="edit-button" onClick={startEditing}>Редактировать</div>
            </div>
        }
    </div>
}
