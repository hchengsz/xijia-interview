import React from "react";

interface ClownListProps {
  clowns: Clown[];
}

interface Clown {
  name: string;
  type: string;
  image: string;
}

const ClownList: React.FC<ClownListProps> = ({ clowns }) => {
  return (
    <div>
      <h2>Registered Clowns</h2>
      <ul>
        {clowns.map((clown, index) => (
          <li key={index}>
            <h3>{clown.name}</h3>
            <p>Type: {clown.type}</p>
            {clown.image && (
              <img src={clown.image} alt={clown.name} width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClownList;
