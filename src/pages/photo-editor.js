import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { handleDownloadImage } from "../components/imagedownloader"

import "../styles/photo-editor.scss"

const PhotoEditor = () => {
  const onDrop = useCallback((droppedFiles) => {
    // console.log(droppedFiles[0]);
  }, [])

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: "image/*",
  })

  const selectedImage = acceptedFiles.length > 0 && (
    <img id="revealed" alt={acceptedFiles[0].name} key={acceptedFiles[0].path} src={URL.createObjectURL(acceptedFiles[0])} />
  )

  return (
    <div className="App">
      <div className="photo-editor">
        <div className="photo-viewer">
          <div>
            <div id="print" className="image-outer-container">
              {/* <p style={{ color: "black", zIndex: "19" }}>Hello</p> */}
              <div className="image-inner-container">
                <TransformWrapper>
                  <TransformComponent>{selectedImage}</TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-zone" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="text">
            {isDragActive ? (
              <p>Drop the images here</p>
            ) : (
              <div>
                <i className="n-icon n-icon-upload"></i>
                <p>Drag &amp; Drop or click to select an image</p>
              </div>
            )}
          </div>
        </div>

        <button onClick={handleDownloadImage}>Capture Image</button>
        {/* <div id="print">This will be downloaded as an image</div> */}
      </div>
    </div>
  )
}

export default PhotoEditor
