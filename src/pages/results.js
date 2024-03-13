import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { ResultsMain } from "../components/main/results";
import { useDispatch, useSelector } from "react-redux";
import { tableDataRequest } from "../requests";
import { setData } from "../redux/tableSlice";

export const ResultPage = () => {
    const tableData = useSelector(state => state.table.data);
    const isAdmin = useSelector(state => state.user.isAdmin);
    
    const [tableRows, setTableRows] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!tableData || tableData.length === 0) {
            tableDataRequest().then(data => {
                if (data) {
                    dispatch(
                        setData(data)
                    );
                }
    
                setTableRows(data);
            });
        } else {
            setTableRows(tableData);
        }
    }, [dispatch, tableData])

    return <>
        <Header/>
        <Title title='ТУРНИРНАЯ ТАБЛИЦА'/>
        <ResultsMain tableRows={tableRows} isAdminMode={isAdmin}/>
        <Footer/>
    </>
}

// const tempRows = [
//     {
//         name: 'test',
//         games: 13,
//         win: 5,
//         lose: 5,
//         draw: 3,
//         winRatio: 7,
//         score: 12
//     },
//     {
//         name: 'test2',
//         games: 13,
//         win: 5,
//         lose: 5,
//         draw: 3,
//         winRatio: 7,
//         score: 12
//     },
//     {
//         name: 'test3',
//         games: 13,
//         win: 5,
//         lose: 5,
//         draw: 3,
//         winRatio: 7,
//         score: 12
//     },
//     {
//         name: 'test4',
//         games: 13,
//         win: 5,
//         lose: 5,
//         draw: 3,
//         winRatio: 7,
//         score: 12
//     }
// ]