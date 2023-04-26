import { styled } from "@stitches/react";

export const FooterPayment = styled("div", {
  width: "100vw",
  position: "fixed",
  bottom:0,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 12,
  background: "white",
  gap: 10,
});

export const ContentPayment = styled("div", {
  width: "450px",
  maxWidth: 450,
  padding: 10,
  gap: 10,
  margin: "0 auto",
  background: "#13293d",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const BtnPayment = styled("button", {
  background: "green",
  color: "white",
  padding: 10,
  border: "none",
  borderRadius: "5px 5px 0px 0px",
  width: 200,
  fontSize: 10,
});