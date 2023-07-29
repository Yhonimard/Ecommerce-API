/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const NextButton = ({ currentSlide, slideCount, ...props }) => {
  return (
    <NavigateNext
      {...props}
      className={`slick-next slick-arrow ${
        currentSlide === 0 ? "slick-disabled" : ""
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    />
  );
};

const PrevButton = ({ currentSlide, slideCount, ...props }) => {
  return (
    <IconButton
      {...props}
      className={`slick-prev slick-arrow ${
        currentSlide === 0 ? "slick-disabled" : ""
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <NavigateBefore />
    </IconButton>
  );
};

export { NextButton, PrevButton };
