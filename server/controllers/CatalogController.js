import Catalog from "../models/CatalogModel.js";

export const getCatalog = async (req, res) => {
  try {
    const response = await Catalog.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCatalogById = async (req, res) => {
  try {
    const response = await Catalog.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCatalog = async (req, res) => {
  try {
    await Catalog.create(req.body);
    res.status(201).json({ message: "Produk Telah ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};

export const updateCatalog = async (req, res) => {
  try {
    await Catalog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Data Produk Telah diupdate" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCatalog = async (req, res) => {
  try {
    await Catalog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Data Produk Telah dihapus" });
  } catch (error) {
    console.log(error);
  }
};
