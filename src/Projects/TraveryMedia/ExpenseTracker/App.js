import React from 'react';
import { Header } from './Header';
import './App.css';
import { Balance } from './compoenents/Balance';
import { IncomeExpenses } from './compoenents/IncomeExpenses';
import { TransactionList } from './compoenents/TransactionList';
import { AddTransaction } from './compoenents/AddTransaction';

import {GlobalProvider} from "./contexts/GlobalState";

function App_tracker(){
    return (
        <GlobalProvider >
        <div>
        <div style={{backgroundColor:"white",textAlign:"center",height:"75%",width:"40%",marginLeft:"30%",marginTop:"2%"}}>
            <Header/>
            <br/>
            <div className="container">
            <Balance/>
            <br/>
            <IncomeExpenses/>
            <br/>
            <TransactionList/>
            <br/>
            <AddTransaction/>
            <br/>
            </div>
            </div>
            </div>
        </GlobalProvider>
    )
}

export default App_tracker;