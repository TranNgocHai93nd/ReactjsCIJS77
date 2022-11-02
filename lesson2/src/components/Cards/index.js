import './style.css';

function Card({name, age, address = "Chưa rõ"}) {
    
    return (
        <div className="card">
            <div className="name">Name: {name}</div>
            <div className="age">Name: {age}</div>
            <div className="address">Address: {address}</div>
        </div>
    );
}
export default Card;