import React, { useState } from "react";
import { FaPlus, FaEye, FaTrashAlt } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { bileTransformation } from "../mocks/transformationMock";
import Modals from "../layouts/Modals";
import { CiSearch } from "react-icons/ci";
import Dashboard from "../layouts/Dashboard";
import { essences, packs } from "../mocks/Mock2";
import HoverLabelComponent from "../components/HoverLabelComponent";

const BileEssence = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openListItem, setOpenListItem] = useState(false);
  const [productList, setProductList] = useState(bileTransformation);
  const [searchParc, setSearchParc] = useState("");
  const [searchEssence, setSearchEssence] = useState("");

  const onProductClick = (produit) => {
    setOpenListItem(true);
    setSelectedProduct(produit);
  };

  const handleSearchParc = (event) => {
    setSearchParc(event.target.value);
  };

  const handleSearchEssence = (event) => {
    setSearchEssence(event.target.value);
  };



  const filteredProduct = productList.filter(
    (product) =>
      (!searchEssence || product.nom_essence.toLowerCase().includes(searchEssence.toLowerCase())) &&
      (!searchParc || product.nom_parc.toLowerCase().includes(searchParc.toLowerCase())) 
  );

  return (
    <Dashboard>
      <Modals
        open={openListItem}
        onClose={() => {
          setOpenListItem(false);
        }}
      >
        {selectedProduct && (
          <div className="m-8 text-center flex gap-4 flex-col capitalize">
            <h2 className="text-2xl pb-2 ">
              {selectedProduct.date + " " + selectedProduct.heure}
            </h2>
            <p>Date de livraison: {selectedProduct.date}</p>
            <p>code barre: {selectedProduct.code_barre}</p>
            <p>diametre gros bout: {selectedProduct.diametre_gb}</p>
            <p>diametre petit bout: {selectedProduct.diametre_pb}</p>
            <p>diametre_moyen_bout: {selectedProduct.diametre_mb}</p>
            <p>volume: {selectedProduct.volume}</p>
          </div>
        )}
      </Modals>
      <div className="overflow-x-clip">
        <div className="flex justify-between p-3 flew-row ">
          <div className="flex gap-2">
            <label htmlFor="nomEssence">Essence</label>
            <select
              value={searchEssence}
              onChange={handleSearchEssence}
              name="nom_essence"
              className="p-1 gap-1 outline-none rounded bg-white dark:bg-gray-600"
            >
              <option value="">Sélectionner une essence</option>
              {essences.map((item) => (
                <option key={item._id} value={item.nom_essence}>
                  {item.nom_essence}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <label htmlFor="nomParc">Parc</label>
            <select
              value={searchParc}
              onChange={handleSearchParc}
              name="nom_parc"
              className="p-1 gap-1 outline-none rounded bg-white dark:bg-gray-600"
            >
              <option value="">Sélectionner un parc</option>
              {packs.map((item) => (
                <option key={item._id} value={item.nom}>
                  {item.nom}
                </option>
              ))}
            </select>
          </div>
         
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between py-2 bg-gray-200 dark:bg-gray-700">
          <p className="w-1/4 justify-center flex">Date de livraison</p>
          <p className="w-1/4 justify-center flex">Sequence</p>
          <p className="w-1/4 justify-center flex">Code barres</p>
          <p className="w-1/4 justify-center flex">Détail / Supprimer</p>
        </div>
        <div className="flex flex-col overflow-y-scroll max-h-80 max-w-full relative pb-1 pr-1 h-96">
          {filteredProduct.map((index) => (
            <div className="flex flex-row justify-between border-y-1 py-2" key={index.id}>
              <p className="w-1/4 justify-center flex">{index.date}</p>
              <p className="w-1/4 justify-center flex">{index.sequence}</p>
              <p className="w-1/4 justify-center flex">{index.code_barre}</p>
              <div className="w-1/4 justify-center flex flew-row gap-4">
                <div
                  className="p-1 bg-orange-0 hover:bg-orange-600 hover:cursor-pointer"
                  onClick={() => {
                    onProductClick(index);
                  }}
                >
                  <HoverLabelComponent buttonContent={<FaEye />} labelContent="Voir les détails" />
                </div>
                <div
                  className="p-1 bg-yellow-0 hover:bg-yellow-600 hover:cursor-pointer"
                  onClick={() => {
                    onModifyEmployee(index);
                  }}
                >
                  <HoverLabelComponent buttonContent={<HiPencil />} labelContent="Modifier" />
                </div>
                <div
                  onClick={() => onDeleteClick(index)}
                  className="p-1 bg-red-0 hover:cursor-pointer hover:bg-red-600"
                >
                  <HoverLabelComponent buttonContent={<FaTrashAlt />} labelContent="Supprimer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  );
};

export default BileEssence;
