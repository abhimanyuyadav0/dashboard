import React from 'react';
import { useParams } from 'react-router-dom';

const ViewMedia = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>View Media {`>>`} {id}</h1>
    </div>
  );
};

export default ViewMedia;
