import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function home(){
    return(
        <div className="grid grid-cols-3 divide-x ">
            
            <Sidebar/>
            <Main/>
        </div>
    );
}

export default home;