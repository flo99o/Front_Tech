import React from "react";
import UpdateAdminProfile from "./UpdateAdminProfile";
import UpdateCompagnyForm from "./UpdateCompagnyForm";
import UpdateUserProfile from "./UpdateUserProfile";

const UpdateFormControl = (props) => {
  const { userType, ...rest } = props;
  switch (userType) {
    case "user":
      return <UpdateUserProfile />;
    case "admin":
      return <UpdateAdminProfile />;
    case "compagny": 
    return <UpdateCompagnyForm />
    default:
      return null;
  }
};

export default UpdateFormControl;
