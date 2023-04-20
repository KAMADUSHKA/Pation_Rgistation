const FormatList = ({detail}) => {
    return(
        <div id="main">
            
            <p id="detail"><strong>Your First Name :</strong>{detail.fname}</p>
            <p id="detail"><strong>Your Second Name :</strong>{detail.lname}</p>
            <p id="detail"><strong>Your Mobile Number :</strong>{detail.mnumber}</p>
            <p id="detail"><strong>Your E-mail :</strong>{detail.email}</p>
            <p id="detail"><strong>Created Date :</strong>{detail.createdAt}</p>
            
        </div>
    )
}

export default FormatList