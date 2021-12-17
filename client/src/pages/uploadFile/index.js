import React, { useEffect } from 'react';
import './uploadFile.css';

function UploadFilesPages() {
  useEffect(() => {
    document.title = "Tải file";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Upload file
        </p>
      </header>
    </div>
  );
}

export { UploadFilesPages };
