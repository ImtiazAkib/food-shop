import { Link } from "react-router-dom";

const Button = (data) => {
  return (
    <>
      <Link className={`btn-starter py-3 px-5 md:px-9`}>{data.info}</Link>
    </>
  );
};

export default Button;
