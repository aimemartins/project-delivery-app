import React from 'react';
// import { Navigate } from 'react-router-dom';
// import Header from '../components/Header';
// import { requestLogin, setToken, requestData } from '../services/requests';
// import { positiveLogo } from '../images';

function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogged, setIsLogged] = useState(false);
//   const [failedTryLogin, setFailedTryLogin] = useState(false);

  //   const login = async (event) => {
  //     event.preventDefault();

  //     try {
  //       const { token } = await requestLogin('/login', { email, password });

  //       setToken(token);

  //       const { role } = await requestData('/login/role', { email, password });

  //       localStorage.setItem('token',  token);
  //       localStorage.setItem('role',  role);

  //       setIsLogged(true);
  //     } catch (error) {
  //       setFailedTryLogin(true);
  //       setIsLogged(false);
  //     }
  //   };

  //   useEffect(() => {
  //     setFailedTryLogin(false);
  //   }, [email, password]);

  //   if (isLogged) return <Navigate to="/matches" />;

  return (
    <p>oi</p>
  );
}

export default Login;
