import React from 'react';
import Index from 'pages/index';
const routers = [
  {
    path: "/",
    component: Index,
    exact: true
  },
  {
    path: "/buyCar",
    component: Index,
    child: [
      {
        path: "/buyCar/content",
        component: Idx
      }
    ]
  }
];
function Idx(){
  return (<div>yyyy</div>)
}
export default routers;
