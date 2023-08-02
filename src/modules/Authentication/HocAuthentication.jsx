import { checkAuthentication } from "./checkAuthentication";

// Higher-Order Component for handling authentication
function HocAuthentication(authKey, Component) {
  return function WithAuthentication(props) {
    const isLoggedIn = checkAuthentication(authKey);

    if (!isLoggedIn) {
      // You can perform redirect or other actions here if the user is not authenticated
      return <p>Please login to access this component.</p>;
    }

    // Render the original component if the user is authenticated
    return <Component {...props} />;
  };
}
export default HocAuthentication;
