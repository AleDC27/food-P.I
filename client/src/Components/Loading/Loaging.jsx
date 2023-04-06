import React from "react";
import s from "./loading.module.css";

export default function Loading() {
  return (
    <div style={{paddingTop:"100px",height:"100vh"}}>
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}
