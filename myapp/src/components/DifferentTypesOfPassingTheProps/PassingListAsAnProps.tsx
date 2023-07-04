import React from "react";

type TypeOfProps = {
  details: {
    id: number;
    firstname: string;
    lastname: string;
  }[];
};

const PassingListAsAnProps: React.FC<TypeOfProps> = (props) => {
  const { details } = props;

  return (
    <div>
      {details.map((each, index) => (
        <li style={{ listStyleType: "none" }} key={index}>
          <h4>
            {each.firstname} {each.lastname}
          </h4>
        </li>
      ))}
    </div>
  );
};

export default PassingListAsAnProps;
