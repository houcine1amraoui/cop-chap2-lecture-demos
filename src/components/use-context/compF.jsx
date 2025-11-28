import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function CompF() {
  let username = null;
  username = useContext(UserContext);
  return (
    <div>
      CompF {username !== null ? "Authenticated" : "you have to loggin"}
    </div>
  );
}

export default CompF;
