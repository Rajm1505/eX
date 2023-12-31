import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function home(){
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x ">
            
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default home;