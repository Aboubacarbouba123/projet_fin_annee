import React, { useState } from 'react';
import ProductsLayout from '../layouts/ProductsLayout';
import { FaPlus, FaEye, FaTrashAlt } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi';
import { scerie } from '../mocks/sceirieMock';
import { essences, packs } from '../mocks/Mock2';
import Modals from '../layouts/Modals';
import { CiSearch } from 'react-icons/ci';
import Dashboard from '../layouts/Dashboard';
import { gardien } from '../mocks/gardienMock';
import { chauffeur } from '../mocks/ChauffeurMock';

const EntreeScerie = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openListItem, setOpenListItem] = useState(false);
  const [deleteItemModal, setDeleteItemModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState(scerie);
  const [onSelectedDelete, setOnSelectedDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const onProductClick = (produit) => {
    setOpenListItem(true);
    setSelectedProduct(produit);
  };

  const onDeleteClick = (produit) => {
    setDeleteItemModal(true);
    setOnSelectedDelete(produit);
  };

  const onFinalDeleteClick = (produitId) => {
    setDeleteItemModal(false);
    deleteProduct(produitId);
  };

  const deleteProduct = (productId) => {
    setDeleteItemModal(false);
    setProductList(productList.filter((produit) => produit.id !== productId));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProduct = productList.filter((product) =>
    product.nom_gardien && product.nom_gardien.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dashboard>
      <Modals open={openAdd} onClose={() => setOpenAdd(false)}>
        <div className="flex flex-col gap-2 min-w-80">
          <h1 className="text-2xl mt-2">Ajouter une entree</h1>
          <label htmlFor="nomGardien">
            Le nom de gardien <span className="text-red-500">*</span>
          </label>
          <select
            name="contenu"
            className="p-2 text-gray-900"
          >
            <option value="">Sélectionner un gardien</option>
            {gardien.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom_gardien}
              </option>
            ))}
          </select>
          <label htmlFor="date">
            date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="p-2 text-gray-900"
            required
            placeholder="325"
          />
          <label htmlFor="heure">
            heure d'arriver <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            className="p-2 text-gray-900"
            required
            placeholder="325"
          />
          <label htmlFor="nomChauffeur">
            nom du chauffeur <span className="text-red-500">*</span>
          </label>
          <select
            name="contenu"
            className="p-2 text-gray-900"
          >
            <option value="">Sélectionner une chauffeur</option>
            {chauffeur.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom_chauffeur}
              </option>
            ))}
          </select>
          <label htmlFor="matricule">
            immatriculation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="p-2 text-gray-900"
            required
            placeholder="cmv25"
          />
          <label htmlFor="contenu">
            contenu <span className="text-red-500">*</span>
          </label>
          <select
            name="contenu"
            className="p-2 text-gray-900"
          >
            <option value="">Sélectionner une essence</option>
            {essences.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom_essence}
              </option>
            ))}
          </select>
          <label htmlFor="origine">
            origine <span className="text-red-500">*</span>
          </label>
          <select
            name="origine"
            className="p-2 text-gray-900"
          >
            <option value="">Sélectionner une parc</option>
            {packs.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nom}
              </option>
            ))}
          </select>
          <div className="flex flex-row justify-between">
            <button className="bg-green-400 hover:bg-green-600 p-1">
              Ajouter
            </button>
            <button
              className="bg-red-400 hover:bg-red-600 p-1"
              onClick={() => setOpenAdd(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      </Modals>

      {/* Modal pour afficher un produit */}
      <Modals
        open={openListItem}
        onClose={() => setOpenListItem(false)}
      >
        {selectedProduct && (
          <div className="m-8 text-center flex gap-4 flex-col capitalize">
            <h2 className="text-2xl pb-2 ">{selectedProduct.date_d_entree}</h2>
            <p>Nom Gardien: {selectedProduct.nom_gardien}</p>
            <p>Nom Chauffeur: {selectedProduct.nom_chauffeur}</p>
            <p>Immatriculation du véhicule: {selectedProduct.matricule}</p>
            <p>Origine: {selectedProduct.origine}</p>
            <p>Contenu: {selectedProduct.contenu}</p>
            <p>Date d'arrivée: {selectedProduct.heure_d_arriver}</p>
          </div>
        )}
      </Modals>

      {/* Modal pour supprimer un produit */}
      <Modals
        open={deleteItemModal}
        onClose={() => setDeleteItemModal(false)}
      >
        {onSelectedDelete && (
          <div className="flex flex-col gap-4 min-h-52 min-w-52 justify-center items-center">
            <FaTrashAlt size={50} className="text-red-600" />
            <p className="text-2xl">Supprimer</p>
            <p>{onSelectedDelete.id}</p>
            <p>{onSelectedDelete.nom_gardien}</p>
            <div className="flex flex-row gap-10 justify-between">
              <button
                onClick={() => onFinalDeleteClick(onSelectedDelete.id)}
                className="p-1 bg-red-400 hover:bg-red-600"
              >
                Supprimer
              </button>
              <button
                onClick={() => setDeleteItemModal(false)}
                className="p-1 bg-orange-400 hover:bg-orange-600"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </Modals>

      <div className="overflow-clip">
        <div className="flex justify-between pb-3 flex-row">
          <div onClick={() => setOpenAdd(true)} className="flex justify-center gap-2">
            <span className="p-1 bg-green-0 hover:bg-green-600 cursor-pointer">
              <FaPlus />
            </span>
            Ajouter
          </div>
          <div className="flex flex-row items-center px-1 gap-1 rounded bg-white dark:bg-gray-600">
            <CiSearch className="dark:text-gray-50" />
            <input
              type="text"
              placeholder="search"
              className="p-1 outline-0 dark:text-gray-50 dark:bg-gray-600"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-row justify-between py-2 bg-gray-200 dark:bg-gray-700">
          <p className="w-1/4 justify-center flex">Date</p>
          <p className="w-1/4 justify-center flex">Nom Gardien</p>
          <p className="w-1/4 justify-center flex">Nom chauffeur</p>
          <p className="w-1/4 justify-center flex">Détail / Supprimer</p>
        </div>
        <div className="flex flex-col overflow-y-scroll max-h-80 max-w-full relative pb-1 pr-1 h-96">
          {filteredProduct.map((produit) => (
            <div
              className="flex flex-row justify-between border-y-1 py-2"
              key={produit._id}
            >
              <p className="w-1/4 justify-center flex">{produit.date_d_entree}</p>
              <p className="w-1/4 justify-center flex">{produit.nom_gardien}</p>
              <p className="w-1/4 justify-center flex">{produit.nom_chauffeur}</p>
              <div className="w-1/4 justify-center flex flex-row gap-4">
                <div
                  className="p-1 bg-orange-0 hover:bg-orange-600 hover:cursor-pointer"
                  onClick={() => onProductClick(produit)}
                >
                  <FaEye />
                </div>
                <div
                  className="p-1 bg-yellow-0 hover:bg-yellow-600 hover:cursor-pointer"
                  onClick={() => onModifyEmployee(produit)}
                >
                  <HiPencil />
                </div>
                <div
                  onClick={() => onDeleteClick(produit)}
                  className="p-1 bg-red-0 hover:cursor-pointer hover:bg-red-600"
                >
                  <FaTrashAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default EntreeScerie;
