import css from './TransactionHistory.module.css';
import Transaction from '../Transaction/Transaction';

export default function TransactionHistory ({items}) {
    return(
        <table className={css.tabletransactions}>
            <thead className={css.tableheads}>
                <tr>
                <th className={css.tableitemhead}>Type</th>
                <th className={css.tableitemhead}>Amount</th>
                <th className={css.tableitemhead}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tablebody}>
                {items.map((transaction) =>(
                    <tr className={css.transaction} key={transaction.id}>
                        <Transaction 
                                     type={transaction.type}
                                     amount={transaction.amount}
                                     currency={transaction.currency}
                        />
                    </tr>
                   
                ))}
            </tbody>
</table>
    );
};

