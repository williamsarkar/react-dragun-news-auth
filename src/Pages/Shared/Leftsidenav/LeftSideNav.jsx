import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
const [cetagorys, setCetagoris]= useState([]);

useEffect(()=>{
    fetch('categories.json')
    .then(res=>res.json())
    .then(data=>setCetagoris(data))

},[])

    return (
        <div className="space-y-5">
            <h2 className="text-2xl">All Caterogy</h2>
            {
                cetagorys.map(cetagory => <Link to={`/cetagory/&{cetagory.id}`} className="block" key={cetagory.id}> {cetagory.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;