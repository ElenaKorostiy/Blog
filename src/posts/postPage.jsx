import { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useblogDataSelector, addComents } from '../store/blogSlice';

import "./card.css";


export const PostPage = () => {
    const { pathname } = useLocation();
    const [value, setValue] = useState("");
    const allBlogs = useblogDataSelector();
    const dispatch = useDispatch();
    const [data] = allBlogs.filter((blog) => blog.url === pathname)
    


    const onClick = (id) => (e) => {
        dispatch(addComents({ id: id, coments: value }))
        setValue("");
    };
  
    return (
          <div className="all">
            <h1 className="first">{data.title}</h1>
            <Link to="/">
                <button className="second">Go back</button>
            </Link>
            <br />
            <br/>
            <img className="third" src={data.image} alt={data.title} />
            <p>{data.description}</p>
            <input className="fourth" type="text"
            value={value}
            onChange={(e) => {
            setValue(e.target.value);
            }} />
            <br/>
            <br/>
            <button className="second" onClick={onClick(data.id)}>add coment</button>
            <div>
                {data.coments.length === 0 ? null : (
                    <ul>
                        {data.coments.map((comment, index) => (
                            <li key={index}>{comment}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
};