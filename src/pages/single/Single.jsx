import "./single.css";
import SinglePost from "../../components/singlePost/singlePost";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />
    </div>
  ); 
}
