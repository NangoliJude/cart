import React from "react";

const white = "#fff";
const black = "#111";
const blue = "#07c";
const green = "#42f46e";
const colors = { white, black, blue, green };

const space = [0, 8, 16, 32, 64];

const xS = {
  buttonX: {
    backgroundColor: colors.green,
    border: "none",
    color: "white",
    padding: "7px 31px",
    display: "inline-block",
    fontSize: "14px",
    borderRadius: "5px",
    outline: "none",
    lineHeight: "25px"
  },

  inputX: {
    height: "auto",
    marginBottom: "10px",
    padding: "5px 5px",
    border: "1px solid #bbb",
    color: "#aaa",
    outline: space[0],
    minWidth: "200px",
    borderRadius: "5px",
    paddingLeft: "10px",
    display: "block",
    inlineHeight: "25px",
    fontSize: "15px",
    fontFamily: "Roboto",
    fontWeight: "700",
    letterSpacing: "0.1px"
  },
  formX: {
    position: "relative",
    maxWidth: "300px",
    padding: "19px 29px 29px",
    margin: "185px auto 20px",
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    borderRadius: "5px",
    boxShadow: "0px 1px 2px #BEBEBE"
  },
  spanX: {
    color: "red",
    marginLeft: "15px",
    marginTop: "7px",
    fontSize: "10px"
  },

  thumbX: {
    color: colors.black,
    marginLeft: "15px",
    marginTop: "7px",
    fontSize: "15px"
  }
};

export const Button = ({ ...props }) => (
  <button {...props} style={xS.buttonX}>
    {props.children}
  </button>
);

export const Span = ({ ...props }) => {
  return (
    <span {...props} style={xS.spanX}>
      {props.children}
    </span>
  );
};

export const ThumbsUp = ({ ...props }) => {
  return (
    <span {...props} style={xS.thumbX}>
      {props.children}
    </span>
  );
};

export const Input = ({ ...props }) => <input {...props} style={xS.inputX} />;

export const FormX = ({ ...props }) => <form {...props} style={xS.formX} />;
