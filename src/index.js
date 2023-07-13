import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Cards";
import SeriesData from "./SeriesData";
import './index.css';

const Acard = (val) => {
 return(
  <Card 
   imgsrc = {val.imgsrc}
   title = {val.title}
   sname ={val.sname}
  link = {val.link}
  />
 );
}

ReactDOM.render(
  <> 
  <h1 className="heading_style">List of Top 5 WebSeries in 2023.</h1>
  {SeriesData.map(Acard)}
  </>
  ,document.getElementById('root')
);