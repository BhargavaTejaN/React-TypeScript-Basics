import React from "react";

export type ProfileProps = {
  name: string;
};

const Profile: React.FC<ProfileProps> = (props) => {
  const { name } = props;

  return (
    <div>
      <h2>Private Profile Component</h2>
      <h2>Name is {name}</h2>
    </div>
  );
};

export default Profile;
