import css from './Transaction.module.css';

export default function Transaction ({type, amount, currency}){
    return (
        <>
        <td className={css.tableitembody}>{type}</td>
        <td className={css.tableitembody}>{amount}</td>
        <td className={css.tableitembody}>{currency}</td>
      </>
    );
};