import { faCircleUser, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from "next/link";

const Login = () => {
  return (
    <div className="glass-card">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
      <form action="submit">
        <div className="relative my-4">
          <input type="text" className="custom-input peer" placeholder=""/>
          <label htmlFor="" className="moving-label">Username</label>
          <FontAwesomeIcon icon={faUser} size="1x" className="absolute top-4 right-4"/>
        </div>
        <div className="relative my-4">
          <input type="password" className="custom-input peer" placeholder=""/>
          <label htmlFor="" className="moving-label">Password</label>
          <FontAwesomeIcon icon={faLock} size="1x" className="absolute top-4 right-4"/>
        </div>
        <button type="submit" className="primary-button">Sign In</button>
        <span>New user? <Link href="/register" className="text-white/50 font-bold underline">Sign Up</Link> </span>
      </form>
    </div>
  );
};

export default Login;
