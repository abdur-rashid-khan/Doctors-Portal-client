   import React from "react";
   import { Link, useMatch, useResolvedPath } from "react-router-dom";

   function CustomLink({ children, to, ...props }) {
   let resolved = useResolvedPath(to);
   let match = useMatch({ path: resolved.pathname, end: true });
   return (
      <div id="active">
         <Link
         style={{
            backgroundColor: match ? "#0FCFEC" : "transparent",
            color: match ? "#FFFFFF" : "#000",
            padding:match ? ".7rem" : "0rem",
            borderRadius:'3px'
         }}
         to={to}
         {...props}
         >
         {children}
         </Link>
         {/* {match && " (active)"} */}
      </div>
   );
   }

   export default CustomLink;
