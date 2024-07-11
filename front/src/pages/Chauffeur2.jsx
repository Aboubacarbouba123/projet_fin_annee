import React, { useState } from "react";
import { FaPlus, FaEye, FaTrashAlt } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { chauffeur } from "../mocks/ChauffeurMock";
import Modals from "../layouts/Modals";
import { CiSearch } from "react-icons/ci";
import Dashboard from "../layouts/Dashboard";

const Chauffeur2 = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openListItem, setOpenListItem] = useState(false);
  const [deleteItemModal, setDeleteItemModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState(chauffeur);
  const [onSelectedDelete, setOnSelectedDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onProductClick = (produit) => {
    {
      setOpenListItem(true);
    }
    setSelectedProduct(produit);
  };

  const onDeleteClick = (produit) => {
    setDeleteItemModal(true);
    setOnSelectedDelete(produit);
  };

  const onFinalDeleteClick = (produit) => {
    setDeleteItemModal(false);
    deleteProduct(produit);
  };

  const deleteProduct = (productId) => {
    setDeleteItemModal(false);
    setProductList(productList.filter((produit) => produit.id !== productId));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProduct = productList.filter(
    (product) =>
      product.nom_chauffeur &&
      product.nom_chauffeur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dashboard>
      <Modals open={openAdd} onClose={() => setOpenAdd(false)}>
        <div className="flex flex-col gap-2 min-w-80">
          <h1 className="text-2xl mt-2">Ajouter un chauffeur </h1>
          <label htmlFor="nomGardien">
            Nom gardien <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="p-2 text-gray-900"
            required
            placeholder="tamo tchinda"
          />

          <label htmlFor="matricule">
            Matricule <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="p-2 text-gray-900"
            required
            placeholder="chene1233"
          />

          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="Email"
            className="p-2 text-gray-900"
            required
            placeholder="steve@gmail.com"
          />

          <label htmlFor="telephone">
            Telephone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="p-2 text-gray-900"
            required
            placeholder="6968855515"
          />

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

      {/* Modal for displaying an essence entry */}
      <Modals
        open={openListItem}
        onClose={() => {
          setOpenListItem(false);
        }}
      >
        {selectedProduct && (
          <div className="m-8 text-center flex gap-4 flex-col capitalize">
            <h2 className="text-2xl pb-2 "> {selectedProduct.nom_chauffeur}</h2>
            <p>matricule: {selectedProduct.matricule}</p>
            <p>Email: {selectedProduct.email}</p>
            <p>Numero_telephone: {selectedProduct.numero_telephone}</p>
          </div>
        )}
      </Modals>

      {/* Modal for deleting an essence entry */}
      <Modals
        open={deleteItemModal}
        onClose={() => {
          setDeleteItemModal(false);
        }}
      >
        {onSelectedDelete && (
          <div className="flex flex-col gap-4 min-h-52 min-w-52 justify-center items-center">
            <FaTrashAlt size={50} className="text-red-600" />
            <p className="text-2xl">Supprimer</p>
            <p>{onSelectedDelete.id}</p>
            <p>{onSelectedDelete.nom_chauffeur}</p>

            <div className="flex flex-row gap-10 justify-between">
              <button
                onClick={() => onFinalDeleteClick(onSelectedDelete.id)}
                className="p-1 bg-red-400 hover:bg-red-600"
              >
                Supprimer
              </button>
              <button
                onClick={() => setDeleteItemModal(false)}
                className="p-1  bg-orange-400 hover:bg-orange-600"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </Modals>

      <div className="overflow-clip">
        <div className="flex justify-between pb-3  flew-row ">
          <div
            onClick={() => setOpenAdd(true)}
            className="flex justify-center gap-2"
          >
            <span className="p-1 bg-green-0  hover:bg-green-600 cursor-pointer">
              <FaPlus />
            </span>
            Ajouter
          </div>

          <div className=" flex flex-row items-center  px-1 gap-1 rounded bg-white dark:bg-gray-600">
            <CiSearch className="dark:text-gray-50 " />
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
          <p className="w-1/4 justify-center flex">Nom gardien</p>
          <p className="w-1/4 justify-center flex">numero telephone</p>
          <p className="w-1/4 justify-center flex">matricule</p>

          <p className="w-1/4 justify-center flex"> detail / supprimer</p>
        </div>
        <div className="flex flex-col overflow-y-scroll max-h-80 max-w-full relative pb-1 pr-1 h-96">
          {filteredProduct.map((index) => (
            <div
              className="flex flex-row justify-between border-y-1 py-2"
              key={index.id}
            >
              <p className="w-1/4 justify-center flex">{index.nom_chauffeur}</p>
              <p className="w-1/4 justify-center flex">{index.numero_telephone}</p>
              <p className="w-1/4 justify-center flex">{index.matricule}</p>

              <div className="w-1/4 justify-center flex flew-row gap-4">
                <div
                  className="p-1  bg-orange-0 hover:bg-orange-600 hover:cursor-pointer "
                  onClick={() => {
                    onProductClick(index);
                  }}
                >
                  <FaEye />
                </div>

                <div
                  className="p-1  bg-yellow-0 hover:bg-yellow-600 hover:cursor-pointer "
                  onClick={() => {
                    onModifyEmployee(index);
                  }}
                >
                  <HiPencil />
                </div>

                <div
                  onClick={() => onDeleteClick(index)}
                  className="p-1 bg-red-0 hover:cursor-pointer hover:bg-red-600 "
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

export default Chauffeur2;
