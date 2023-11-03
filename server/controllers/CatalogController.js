import Catalog from "../models/CatalogModel.js";
import path from "path";
import fs from "fs";

export const getCatalog = async (req, res) => {
  try {
    const response = await Catalog.findAll({
      where: {
        publish: 1,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAllCatalog = async (req, res) => {
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
  if (req.files === null) {
    return res.status(400).json({ message: "No FIle Uploaded" });
  }
  const nama_produk = req.body.nama_produk;
  const harga = req.body.harga;
  const publish = req.body.publish;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) {
    return res.status(422).json({ message: "invalid Image" });
  }

  if (fileSize > 5000000) {
    return res.status(422).json({ message: "Image must be less then 5 MB" });
  }

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
  });

  try {
    await Catalog.create({
      nama_produk: nama_produk,
      gambar: fileName,
      url: url,
      harga: harga,
      publish: publish,
    });
    res.status(201).json({ message: "Produk Telah ditambahkan" });
  } catch (error) {
    console.log(error);
  }
};

export const updateCatalog = async (req, res) => {
  const catalog = await Catalog.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!catalog) {
    return res.status(404).json({ message: "No Data Found" });
  }
  let fileName = "";
  if (req.files === null) {
    fileName = catalog.gambar;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];
    if (!allowedType.includes(ext.toLowerCase())) {
      return res.status(422).json({ message: "invalid Image" });
    }
    if (fileSize > 5000000) {
      return res.status(422).json({ message: "Image must be less then 5 MB" });
    }
    const filepath = `./public/images/${catalog.gambar}`;
    fs.unlinkSync(filepath);
    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
    });
  }
  const nama_produk = req.body.nama_produk;
  const harga = req.body.harga;
  const publish = req.body.publish;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  try {
    await Catalog.update(
      {
        nama_produk: nama_produk,
        gambar: fileName,
        url: url,
        harga: harga,
        publish: publish,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Data Produk Telah diupdate" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCatalog = async (req, res) => {
  const catalog = await Catalog.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!catalog) {
    return res.status(404).json({ message: "No Data Found" });
  }
  try {
    const filepath = `./public/images/${catalog.gambar}`;
    fs.unlinkSync(filepath);
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
