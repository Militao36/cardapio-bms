import { styled } from "@stitches/react";
export const DeliveryInfo = styled("div", {
  width: "450px",
  position: "relative",
  maxWidth: 450,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 12,
  background: "white",
});

export const TextDelivery = styled("div", {
  color: "gray",
  display: "flex",
  flexDirection: "column",
  padding: 5
});

export const ButtonCloseOrOpen = styled("button", {
  width: "80px",
  height: "20px",
  border: "none",
  color: "white",
  borderRadius: "20px 0px 0px 20px",
  background: "green",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
});

export const AllCategorys = styled("div", {
  width: "450px",
  position: "relative",
  maxWidth: 500,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  height: "45px",
  background: "#13293d",
  color: "whitesmoke",
  overflow: "scroll",
  overflowX: "scroll",
  overflowY: "hidden",

  "&::-webkit-scrollbar-track": {
    backgroundColor: "#13293d",
  },
  "&::-webkit-scrollbar": {
    height: "2px",
    background: "blue",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "white",
  },
});