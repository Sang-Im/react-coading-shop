import React from "react";
import { useEffect } from "react";

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>0번째내용입니다.</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다.</div>;
  } else if (props.누른탭 === 2) {
    return <div>2번째 내용입니다.</div>;
  }
}

export default TabContent;
