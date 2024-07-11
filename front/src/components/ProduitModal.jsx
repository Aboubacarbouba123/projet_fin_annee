import React from 'react'

const ProduitModal = ({ isOpen, handleClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-sm w-full">
                <button onClick={handleClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right">
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};


export default ProduitModal