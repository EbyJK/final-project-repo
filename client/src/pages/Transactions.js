import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminLayoutNavbar from './AdminLayoutNavbar';
import Footer from '../components/Layout/Footer';
import './Transactions.css';
import moment from 'moment';

const Transactions = () => {

    // const location = useLocation();
    // const { transactions, user} = location.state || { transactions: [] , user };

    const location = useLocation();
    const { transactions, user } = location.state || {};

    const formatDate=(date)=>{
        let transactionDate = moment(date).format("DD-MM-YYYY");
        return transactionDate;
    }


  return (
    <>

        <div>
            <AdminLayoutNavbar/>
        </div>
            <section>
                
                <div>
                    
                </div>

                <div >
                <h1 className='transaction-heading'>Transactions of {user.name} </h1>
                </div>

                <div className='data-div-transaction'>
                {transactions.length === 0 ? (
            <p className='no-transactions-message-admin'>No transactions found</p> ) : 
            (
                <table id='transactions-table'>
    <thead>
        <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {transactions.map((transaction) => (
            <tr key={transaction._id}>
                <td>{formatDate(transaction.date)}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
            </tr>
        ))}
    </tbody>
</table>
 )}
                </div>
            </section>

            <div>
                <Footer/>
            </div>
        </>
  )
}

export default Transactions
