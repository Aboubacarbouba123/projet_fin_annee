import React, {useState} from 'react'
import ProduitModal from './ProduitModal';


const ProductList = () => {
    const [selectedProduit, setSelectedProduit] = useState(null);

    const handleOpenModal = (produit) => {
        setSelectedProduit(produit);
    };

    const handleCloseModal = () => {
        setSelectedProduit(null);
    };

    return (
        <div className="p-5">
            {produits.map(produit => (
                <div key={produit.id_chauffeur} onClick={() => handleOpenModal(produit)} className="cursor-pointer p-2 hover:bg-gray-100">
                    <h4 className="text-lg font-bold">{produit.nom}</h4>
                </div>
            ))}
            <ProduitModal isOpen={!!selectedProduit} handleClose={handleCloseModal}>
                {selectedProduit && (
                    <div>
                        <h4 className="text-xl font-semibold">{selectedProduit.nom}</h4>
                        <p>ID Chauffeur: {selectedProduit.id_chauffeur}</p>
                        <p>Type Essence: {selectedProduit.type_essence}</p>
                        <p>Quantité: {selectedProduit.quantite}</p>
                        <p>Heure Arrivée: {selectedProduit.heure_arriver}</p>
                    </div>
                )}
            </ProduitModal>
        </div>
    );
};


export default ProductList