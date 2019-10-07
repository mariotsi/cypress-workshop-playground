import React, { useState } from 'react';

export default function ImagePicker() {
  const [image, setImage] = useState(null);
  return <div>
    <div className="imageInput">
      <input id="put-the-file-here" type="file" onChange={(ev) => setImage(window.URL.createObjectURL(ev.target.files[0]))} />
    </div>
    <div className="imageContainer">
    <img src={image} />
    </div>
  </div>
}