import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/Leftsidenav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/Rightsidenav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard/NewsCard";


const Home = () => {
 const news = useLoaderData();
 console.log(news);


    return (
        <div>
            
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="border" >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 border">
                    <h2 className="text-4xl">News coming soon</h2>
                    {
                        news.map(anews=> <NewsCard key={news._id} news={anews}></NewsCard>
                    )}
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;