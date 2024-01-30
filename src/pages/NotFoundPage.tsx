import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center">
      <p className="text-color1 text-xl">This page does not exist!</p>
      <Link to="/" className="btn">
        Main page
      </Link>
    </div>
  );
}
export default NotFoundPage;
