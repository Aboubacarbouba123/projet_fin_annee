import React, { useState } from "react";
import { FaPlus, FaEye, FaTrashAlt } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { bileTransformation } from "../mocks/transformationMock";
import Modals from "../layouts/Modals";
import { CiSearch } from "react-icons/ci";
import Dashboard from "../layouts/Dashboard";
import { gardien } from "../mocks/gardienMock";
import { chauffeur } from "../mocks/ChauffeurMock";
import { essences, packs } from "../mocks/Mock2";
import { GiTransform } from "react-icons/gi";
import HoverLabelComponent from "../components/HoverLabelComponent";

const Billonage = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openListItem, setOpenListItem] = useState(false);
  const [deleteItemModal, setDeleteItemModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState(bileTransformation);
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
      product.date &&
      product.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dashboard>
      <Modals open={openAdd} onClose={() => setOpenAdd(false)}>
        <div className="flex flex-col gap-2 min-w-80">
          <h1 className="text-2xl mt-2">Ajouter un bile a transformer</h1>
          <label htmlFor="nomGardien">
            Responsble <span className="text-red-500">*</span>
          </label>
          <select name="nom_gardien" className="p-2 text-gray-900">
            <option value="">Sélectionner un gardien</option>
            {gardien.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom_gardien}
              </option>
            ))}
          </select>

          <label htmlFor="nomChauffeur">
            Chauffeur <span className="text-red-500">*</span>
          </label>
          <select name="nom_chauffeur" className="p-2 text-gray-900">
            <option value="">Sélectionner un chauffeur</option>
            {chauffeur.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom_chauffeur}
              </option>
            ))}
          </select>

          <label htmlFor="nomEssence">
            Essence <span className="text-red-500">*</span>
          </label>
          <select name="nom_essence" className="p-2 text-gray-900">
            <option value="">Sélectionner une essence</option>
            {essences.map((item) => (
              <option key={item._id} value={item._id}>
                {item.nom_essence}
              </option>
            ))}
          </select>

          <label htmlFor="date">
            Date <span className="text-red-500">*</span>
          </label>
          <input type="date" className="p-2 text-gray-900" required />

          <label htmlFor="heure">
            heure <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            name="heure"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="nombre_billes">
            nombre de billes <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="nombre_billes"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="code_barre">
            code barre <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="code_barre"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="sequence">
            sequence <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="sequence"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="longeur">
            Longeur <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="longeur"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="code_barre">
            code barre <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="code_barre"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="volume_bille">
            volume bille <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="volume_bille"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="diametre_gros_bout">
            Diametre gros bout <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="diametre_gros_bout"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="diametre_petit_bout">
            Diametre petit bout <span className="text-red-500">*</span>
          </label>
          <input
            type="type"
            name="diametre_petit_bout"
            className="p-2 text-gray-900"
            required
          />

          <label htmlFor="nom_parc">
            Destination parc <span className="text-red-500">*</span>
          </label>
          <select name="nom" className="p-2 text-gray-900">
            <option value="">Sélectionner une essence</option>
            {packs.map((item) => (
              <option key={item._id} value={item._id}>
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

      {/* Modal for displaying an essence entry */}
      <Modals
        open={openListItem}
        onClose={() => {
          setOpenListItem(false);
        }}
      >
        {selectedProduct && (
          <div className="m-8 text-center flex gap-4 flex-col capitalize">
            <h2 className="text-2xl pb-2 ">
              {" "}
              {selectedProduct.date + " " + selectedProduct.heure}{" "}
            </h2>
            <p>Responsble: {selectedProduct.nom_gardien}</p>
            <p>Nom du chauffeur: {selectedProduct.nom_chauffeur}</p>
            <p>Essence: {selectedProduct.nom_essence}</p>
            <p>sequence: {selectedProduct.sequence}</p>
            <p>code barre: {selectedProduct.code_barre}</p>
            <p>nombre de bille: {selectedProduct.nombre_bille}</p>
            <p>volume des bille: {selectedProduct.volume_bille}</p>
            <p>diametre gros bout: {selectedProduct.diametre_gb}</p>
            <p>diametre petit bout: {selectedProduct.diametre_pb}</p>
            <p>diametre_moyen_bout: {selectedProduct.diametre_mb}</p>
            <p>destination: {selectedProduct.nom_parc}</p>
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
                className="p-1  bg-orange-400 hover:bg-orange-600"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </Modals>

      <div className="overflow-x-clip">
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
          <p className="w-1/4 justify-center flex">Date</p>
          <p className="w-1/4 justify-center flex">Sequence</p>
          <p className="w-1/4 justify-center flex">Code barres</p>

          <p className="w-1/4 justify-center flex"> detail / supprimer</p>
        </div>
        <div className="flex flex-col overflow-y-scroll max-h-80 max-w-full relative pb-1 pr-1 h-96">
          {filteredProduct.map((index) => (
            <div
              className="flex flex-row justify-between border-y-1 py-2"
              key={index._id}
            >
              <p className="w-1/4 justify-center flex">{index.date}</p>
              <p className="w-1/4 justify-center flex">{index.sequence}</p>
              <p className="w-1/4 justify-center flex">{index.code_barre}</p>

              <div className="w-1/4 justify-center flex flew-row gap-4">
                <div
                  className="p-1  bg-orange-0 hover:bg-orange-600 hover:cursor-pointer "
                  onClick={() => {
                    onProductClick(index);
                  }}
                >
                     <HoverLabelComponent
                    buttonContent={<FaEye />}
                    labelContent="voir les details"
                  />
                  
                </div>

                <div
                  className="p-1  bg-yellow-0 hover:bg-yellow-600 hover:cursor-pointer "
                  onClick={() => {
                    onModifyEmployee(index);
                  }}
                >
                    <HoverLabelComponent
                    buttonContent={<HiPencil />}
                    labelContent="modifier"
                  />
                    
                  
                </div>

                <div
                  className="p-1  bg-yellow-0 hover:bg-blue-600 hover:cursor-pointer "
                  onClick={() => {
                    onModifyEmployee(index);
                  }}
                >
                  <HoverLabelComponent
                    buttonContent={<GiTransform/>}
                    labelContent="transformer en billon"
                  />
                </div>

                <div
                  onClick={() => onDeleteClick(index)}
                  className="p-1 bg-red-0 hover:cursor-pointer hover:bg-red-600 "
                >
                    <HoverLabelComponent
                    buttonContent={<FaTrashAlt />}
                    labelContent="supprimer"
                  />
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default Billonage;
