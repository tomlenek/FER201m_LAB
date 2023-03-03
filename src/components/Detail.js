import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ListOfPlayers } from "../shared/ListOfPlayers";
import Modal from './Modal';
import { Icon } from "react-materialize";
function Detail() {

    const [isOpen, setIsOpen] = useState(false);
    const userName = useParams();
    const player = ListOfPlayers.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();
    return (
        <div className='container'>
            <div className='product-card'>
                <div className='badge'>
                    {player.name}
                </div>
                <div className='product-tumb'>
                    <img src={`../${player.img}`} alt='' />
                    {isOpen && <Modal setIsOpen={setIsOpen} player={player} />}
                    <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                        <Icon>ondemand_video</Icon>
                    </a>
                </div>
                <div className='product-details'>
                    <h3>{player.club}</h3>
                    <div className='product-price'>Market value: € {cost}</div>
                    <p>{player.info}</p>
                </div>
            </div>
        </div>
    )

}
export default Detail;