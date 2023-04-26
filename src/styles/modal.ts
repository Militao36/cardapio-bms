import { styled } from "@stitches/react";
import { relative } from "path";


export const ModalProduct = styled("div", {
  height: "100vh",
  maxHeight: "100vh",
  overflow: "block",
  justifyContent: "center",
  alignItems: "center",
  zIndex:"2000",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0 ,
  width: "100vw",
  backgroundColor: "rgba(0,0,0,0.2)",
  opacity: 0.7,
  fontSize: 15,
});

export const ContentProductDescription = styled("div", {
  height: "80vh",
  width: "450px",
  maxWidth: 500,
  background: "white",
  display: "flex",
  flexDirection: "column"
});