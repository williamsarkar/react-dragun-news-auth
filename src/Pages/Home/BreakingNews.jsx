import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex ">
            <button className="btn  btn-secondary">Breaking News</button>
            <Marquee className="text-2xl font-medium bg-green-300" speed={100}>
                I can be a React component, multiple React components,  , multiple React components,, multiple React components,or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;