import MainCard from "components/MainCard";
import { CustomLoader } from "components/common/index";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <>
      {user ? (
        <MainCard>
          <div>
            <h1>User Details</h1>
            <p>
              <strong>Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </MainCard>
      ) : (
        <CustomLoader />
      )}
    </>
  );
};

export default ViewUser;
