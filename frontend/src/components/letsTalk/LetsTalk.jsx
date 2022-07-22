import React from "react";
import "./LetsTalk.css";
import { HiMail } from "react-icons/hi";

export default function LetsTalk() {
  return (
    <p className="p-lets-talk">
      <HiMail className="envelope" />
      Parlons-en
    </p>
  );
}
