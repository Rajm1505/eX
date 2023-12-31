import Tweet from "@/app/components/Tweet/Tweet";
import TweetsData from "@/app/lib/TweetsData.json"


function Main() {
    return (
        <div>
            <div className="home-timeline overflow-x-auto ">
                {TweetsData.tweets.map((tweet) => (
                    <Tweet tweet={tweet} />
                ))}
            </div>
        </div>

    );
};

export default Main;