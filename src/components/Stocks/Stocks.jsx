import { Navigate, useNavigate } from 'react-router-dom';

function Stocks() {
  const loggedIn = true;
  const navigate = useNavigate();

  if (!loggedIn) {
    return <Navigate to="/not-logged-in" replace={true} />;
  }

  const handleClick = () => {
    window.alert("You are being redirected to the home page.");
    navigate(`/`);
  };

  return (
    <div>
      <h1>Stocks Page</h1>
      <p>Welcome to the Stocks page!</p>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
