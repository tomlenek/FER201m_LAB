import React from 'react'

function Modal({ setIsOpen, player }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div className='modal-content'>
                <h4>{player.name} Montage</h4>
                <p><iframe width="560" height="315" src={player.clip} title={player.name} frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen /> </p>
                <div className="modal-footer">
                    <a className="modal-close red-text"> Close</a>
                </div>
            </div>
        </div>
    )
}
export default Modal;