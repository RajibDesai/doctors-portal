import React from 'react';


const ConfurmModal = ({title,message,closeModal,deleteButtonName,successActon,modalData}) => {
    return (
        <div>
            <dialog id="confurmmodal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={()=>successActon(modalData)} className="btn btn-info">{deleteButtonName}</button>
                            <button onClick={closeModal}  className="btn btn-outline">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ConfurmModal;