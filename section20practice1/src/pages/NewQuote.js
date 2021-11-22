import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteForHandler = (quoteData) => {
    console.log(quoteData);
    history.push('/quotes');
  };
  return (
    <>
      <QuoteForm onAddQuote={addQuoteForHandler} />
    </>
  );
};
export default NewQuote;
