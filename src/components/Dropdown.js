import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownList = (props) => {
  const { userList, setUser, user } = props;

  const [updateUser, setUpdateUser] = useState([]);
  useEffect(() => {
    if (userList.length > 0) {
      const newUser = userList.map((user) => ({
        ...user,
        key: user.id,
        text: user.name,
        value: user.name
      }));
      setUpdateUser(newUser);
    }
  }, [userList]);
  const handleChange = (e, { value }) => {
    setUser(value);
  };
  console.log("New:", updateUser);
  return (
    <>
      <Dropdown onChange={handleChange} fluid selection options={updateUser} value={user} />
    </>
  );
};
export default DropdownList;
