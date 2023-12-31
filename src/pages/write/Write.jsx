import "./write.css";

export default function Write() {
  return (
    <div className="write">
          <img className="writeImg" src="../../public/logo.png" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeText writeInput " placeholder="what is new in the campany"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
