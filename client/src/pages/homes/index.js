import React, { useEffect, useRef } from 'react';
import './homes.css';


function HomesPages() {
  const ref = useRef(null)
  useEffect(() => {
    document.title = "Lạc Thuỷ B Confessions";
  }, []);

  const onClick = () => {
    console.log('ref', ref);
    let r = Math.floor(Math.random()*16777215).toString(16);
    console.log('r', r)
    ref.current.style.color = `#${r}`;
  }

  return (
    <div className="container-home">
      {/* <div className="container-welcome">
        <div className="box-welcome">
          <p ref={ref} className="welcome">Chào mừng bạn đến với</p>
          <p className="name">Lạc Thuỷ B Confessions</p>
        </div>
      </div> */}
      <input class="todo__state" id="todo1" type="checkbox" />
      <button onClick={onClick}>click color</button>
    </div>
  );
};

export { HomesPages };
