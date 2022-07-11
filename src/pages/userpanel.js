import "./userpanel.css";

import InfoUser from "../components/infoUser";

const UserPanel = () => {
  let logged = JSON.parse(localStorage.getItem("UserLogged"));
  if (!logged) {
    window.location.href = "/";
  }
  return (
    <>
      <InfoUser />
    </>
  );
};

export default UserPanel;
