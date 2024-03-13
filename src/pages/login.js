import React from "react";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { Footer } from "../components/footer";
import { LoginForm } from "../components/main/login";

export const LoginPage = () => {
    return <>
        <Header/>
        <Title title='Авторизация'/>
        <LoginForm/>
        <Footer/>
    </>
}