import react from "react";

function Links ({Social}){

  return (
    <div>
      <a href={Social.linkedin}>{Social.linkedin}</a> <br/>
      <a href={Social.github}>{Social.github}</a>
    </div>
  )
}

export default Links;