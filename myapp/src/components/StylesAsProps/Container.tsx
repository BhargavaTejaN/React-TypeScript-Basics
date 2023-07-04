import React from "react";

type TypeOfProps = {
  styles: React.CSSProperties;
};

const Container: React.FC<TypeOfProps> = (props) => {
  const { styles } = props;

  return (
    <div>
      <h2 style={styles}>Styles Applied To This Text</h2>
    </div>
  );
};

export default Container;
