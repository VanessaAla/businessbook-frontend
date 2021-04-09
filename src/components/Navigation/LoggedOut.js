import React from "react";
import NavBarItem from "./NavBarItem";

export default function LoggedOut() {
  return (
    <>
      <NavBarItem path="/login" linkText="Login" />
    </>
  );
}
