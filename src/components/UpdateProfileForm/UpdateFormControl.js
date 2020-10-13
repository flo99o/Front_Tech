import React from "react";
import UpdateAdminProfile from "./UpdateAdminProfile";
import UpdateCompagnyProfile from "./UpdateCompagnyProfile";
import UpdateUserProfile from "./UpdateUserProfile";

const UpdateFormControl = (props) => {
  const { userType, ...rest } = props;
  switch (userType) {
    case "user":
      return <UpdateUserProfile />;
    case "admin":
      return <UpdateAdminProfile />;
    case "compagny": 
    return <UpdateCompagnyProfile />
    default:
      return null;
  }
};

export default UpdateFormControl;
