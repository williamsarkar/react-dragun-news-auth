import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
           {/* <h1>gjhggjh</h1> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;