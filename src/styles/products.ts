import { styled } from "@stitches/react";

export const ContentItens = styled("div", {
  height: "auto",
  width: "450px",
  position: "relative",
  maxWidth: 500,
  margin: "0 auto",
  background: "white",
  display: "flex",
  flexDirection: "column"
});

export const CategoryItem = styled("div", {
  padding: 10,
  fontSize: 13,
  whiteSpace: "nowrap",
});

export const CardProducts = styled("div", {
  height: 90,
  display: "flex",
  padding: 10,
  justifyContent: "space-around",
  width: "calc(100% - 20px)",
  fontSize: 15,
  border: "1px solid #d9d9d9",
});

export const InfoProducts = styled("div", {
  gap: 3,
  display: "flex",
  flexDirection: "column",
  width: "70%",
})

export const TextProduct = styled("div", {
  color: "#13293d",
  display: "flex",
  fontSize: 13,
  fontWeight:"bold",
});

export const TextValue = styled("div", {
  color: "#13293d",
  display: "flex",
  fontSize: 14,
  fontWeight:"bold",
});

export const TextDescription = styled("div", {
  color: "gray",
  display: "flex",
  fontSize: 12,
  marginLeft: 10,
});

export const BtnAdd = styled("button", {
  background: "#13293d",
  color: "white",
  padding: 5,
  cursor: "pointer",
  border: "none",
  marginTop: 10,
  borderRadius: "5px 5px 0px 0px",
  width: 70,
  fontSize: 10,
})

export const ImgProduct = styled("img", {
  width: "90px",
  height: "90px",
  borderRadius: "10px",
  display: "flex",
});