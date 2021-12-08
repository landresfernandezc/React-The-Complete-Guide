import { useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: quoteDetail,
    error,
  } = useHttp(getSingleQuote,true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="centered focused">
        <p> {error}</p>
      </div>
    );
  }
  if (!quoteDetail.text ) {
    return <p>No quote detail founded</p>;
  }
  return (
    <>
      <HighlightedQuote text={quoteDetail.text} author={quoteDetail.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}></Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
