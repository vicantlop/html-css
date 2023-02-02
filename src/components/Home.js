import { Link } from "react-router-dom";

const Home = ({components}) => {
  return (
    <div>
      <ul>
        {Object.keys(components).map((component, i) => {
          if(component === "Home") {
            return <li key={i}><Link to={`/`} className={`${component}`} >Hello {`${component}`}</Link></li>
          }
          return <li key={i} ><Link to={`/${component}`} className={`${component}`} >Hello {`${component}`}</Link></li>
        })}
      </ul>
    </div>
  );
}
 
export default Home;