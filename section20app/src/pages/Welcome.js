import { Route } from "react-router";

const Welcome = () => {
  return (
    <>
      <h1>The Welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome new user!</p>
      </Route>
    </>
  );
};
export default Welcome;
