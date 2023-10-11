import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { imgSrcState, isModalOpenState } from "./services";

const index = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const [imgSrc, setImgSrc] = useRecoilValue(imgSrcState);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onCropEnd = (croppedImage) => {
    // Handle the cropped image (croppedImage) here
    // This will be called when the user clicks the crop button in the Cropper component
    console.log("Cropped Image URL:", croppedImage);
    handleClose();
  };
  return (
    <Dialog
      fullScreen
      style={{ zIndex: 2147483647 }}
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <IFrameCropper
        onCropEnd={onCropEnd}
        src={imgSrc}
        initialContent={initialContent()}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </Dialog>
  );
};

export default index;
