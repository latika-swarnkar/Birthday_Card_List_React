import { Fragment } from 'react'
import './List.css'
function List({ people }) {
    return (
        <Fragment>
            {
                people.map((person) => {
                    const { id, name, image, age } = person;
                    return (

                        <div key={id} className="card">

                            <img src={image} alt={name} className="rounded person" />
                            <div className="details">
                                <h5>{name}</h5>
                                <br />
                                <h5>{age}</h5>
                            </div>

                        </div>
                    )
                })
            }
        </Fragment>
    );
}

export default List;
