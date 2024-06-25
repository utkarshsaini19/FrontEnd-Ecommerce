import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1 className="font-bold text-xl text-center m-3">
        <Link to='/'><button className="border rounded bg-blue-300">{'<-'} Back to Home</button></Link>
      </h1>

      <h1 className="font-bold text-xl text-center">Oops!!!</h1>
      <h2 className="font-bold text-xl text-center"> Something went wrong!!</h2>
      <h3 className="font-bold text-xl text-center">
        {err.status}: [{err.data}]
      </h3>
    </div>
  );
};

export default Error;
