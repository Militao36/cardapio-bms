import { styled } from "@stitches/react";

export const Header = styled("header", {
  width: "100%",
  height: "180px",
  position: "relative",
  maxWidth: 450,
  margin: "0 auto",
});

export const ImageBanner = styled("img", {
  width: "100%",
  height: "100%",
  filter: "brightness(0.4) opacity(90%)",
});

export const CompanyLogo = styled("img", {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  display: "flex",
});

export const InfoCompany = styled("div", {
  position: "absolute",
  top: 0,
  width: "100%",
  display: "flex",
  alignItems: " center",
  justifyContent: "center",
  bottom: "20px",
  gap: 20,
});
export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "flex-start",
  maxWidth: "280px",
  position: "relative",
  fontFamily: "system-ui",

});

export const ButtonMoreCompany = styled("button", {
  fontFamily: "system-ui",
  margin: 0,
  padding: 5,
  color: "White",
  fontSize: 12,
  position: "absolute",
  bottom: 10,
  left: 5,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: 5,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    opacity: "0.8",
  },
});

export const Text = styled("h1", {
  fontFamily: "system-ui",
  margin: 0,
  padding: 0,
  fontSize: 12,
  fontWeight: "normal",
  "&.name-company": {
    fontFamily: "cursive",
    color: "White",
    fontSize: 25,
    fontWeight: "lighter"
  },
  "&.company-address": {
    color: "White",
    fontSize: 12,
  },
});

export const ButtonWhatsApp = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  bottom: 5,
  right: 5,
  cursor: "pointer",
});

export const Container = styled("div", {});

export const FooterCompany = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: " center",
  bottom: 0,
  height: 30,
  width: "100%",
  maxWidth: "450px"
});