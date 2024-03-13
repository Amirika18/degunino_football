import React, { useEffect } from "react"
import { Header } from "../components/header"
import { Title } from "../components/title"
import { AboutMain } from "../components/main/about"
import { Footer } from "../components/footer"
import { tableDataRequest } from "../requests"
import { useDispatch } from "react-redux"
import { setData } from "../redux/tableSlice"

export const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        tableDataRequest().then(data => {
            if (data) {
                dispatch(
                    setData(data)
                );
            }
        });
    }, [dispatch])

    return <>
        <Header/>
        <Title title='ПЫЛАЯ СЕРДЦАМИ'/>
        <AboutMain/>
        <Footer/>
    </>
}