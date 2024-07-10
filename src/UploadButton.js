// U78784426
// UploadButton.js

import React, { useState } from 'react';

const UploadButton = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulating upload process
    setTimeout(() => {
      setIsUploading(false);
      alert('Image uploaded successfully!');
    }, 2000); };

  return (
    <div>
      {isUploading ? <p>Uploading image...</p> : null}
      <button onClick={handleUpload}>Upload Image</button>
    </div>);};

export default UploadButton;