import "./style.css";
function Mp3({image,name,singer,time,href="#"}) {
    return (
            <div className="main-content">
                <div className="main-content_item">
                    <div className="item-image">
                        <img 
                        src={image} alt="img-music" />
                    </div>
                    <div className="item-content">
                        <ul>
                            <li>{name}</li>
                            <li>
                                <a href={href}>{singer}</a>
                            </li>
                            <li>{time}</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
    }
export default Mp3