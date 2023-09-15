
const CreateNewPost = () => {
  return (
    <div>
          <div className="newPostContainer">
              <div className="newPostHeader">
                  <h2>NEW POST</h2>
              </div>
              <div className="newPostData">
                  <h4>Title:</h4>
                  <input type="text" placeholder="Post Title..."/>
                  <h4>Description:</h4>
                  <input type="text" placeholder="Post Description..."/>
                  <h4>Price:</h4>
                  <input type="number" vale="$" placeholder="Post Price..."/>
                  <h4>Posted By:</h4>
                  <input type="text" placeholder="Post Author..."/>
                </div>
                <div className="button">
                  <button>SUBMIT</button>
                </div>
          </div>
    </div>
  )
}

export default CreateNewPost
