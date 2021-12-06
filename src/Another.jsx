import React from "react";

// this component accepts a prop and looks like this in the template
//         <Another name="Example Props" />

export default function Another(props) {
  return <div>Hello, {props.name} from our Another component</div>;
}
