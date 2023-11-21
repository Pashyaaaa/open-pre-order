import db from "../models/index.js";
const Order = db.models.order;
const OrderDetail = db.models.order_detail;
const Catalog = db.models.catalog;
import "dotenv/config";
import midtransClient from "midtrans-client";

export const getOrder = async (req, res) => {
  try {
    const response = await Order.findAll({
      include: [
        {
          model: OrderDetail,
          as: "order_details",
          include: [
            {
              model: Catalog,
              as: "catalog", // Menggunakan alias yang telah ditentukan pada model
            },
          ],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderById = async (req, res) => {
  try {
    const response = await Order.findOne({
      include: [
        {
          model: OrderDetail,
          as: "order_details",
          include: [
            {
              model: Catalog,
              as: "catalog", // Menggunakan alias yang telah ditentukan pada model
            },
          ],
        },
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (req, res) => {
  const order = await Order.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!order) {
    return res.status(404).json({ message: "No Data Found" });
  }
  try {
    await Order.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Data Produk Telah dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};

export const addOrder = async (req, res) => {
  const { nama, whatsapp, alamat, tanggal_order, tanggal_ambil, order_detail } =
    req.body;

  try {
    const order = await Order.create({
      nama: nama,
      whatsapp: whatsapp,
      alamat: alamat,
      tanggal_order: tanggal_order,
      tanggal_ambil: tanggal_ambil,
    });

    // Inisialisasi total harga
    let totalHarga = 0;

    // Loop through each order_detail and create a record
    for (const detail of order_detail) {
      // Fetch the associated catalog for the order_detail
      const catalogData = await Catalog.findOne({
        where: { id: detail.catalog_id },
      });

      // Calculate the harga based on the original harga and jumlah
      const calculatedHarga = catalogData.harga * detail.jumlah;

      // Tambahkan harga ke total
      totalHarga += calculatedHarga;

      const createdDetail = await OrderDetail.create({
        jumlah: detail.jumlah,
        harga: calculatedHarga,
        catalog_id: detail.catalog_id,
        order_id: order.id,
      });

      // Fetch the associated catalog for the created order_detail
      const updatedCatalogData = await Catalog.findOne({
        where: { id: createdDetail.catalog_id },
      });

      // Assign the updated catalog data to the created order_detail
      createdDetail.catalog = updatedCatalogData;
    }

    // Fetch the associated order_details for the created order
    const orderDetailsData = await OrderDetail.findAll({
      where: { order_id: order.id },
    });

    // Assign the order_details data to the created order
    order.order_details = orderDetailsData;

    //? PAYMENT
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: process.env.SERVER_KEY,
      clientKey: process.env.CLIENT_KEY,
    });

    const order_id = `CustOrder_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}`;
    let parameter = {
      transaction_details: {
        order_id: order_id,
        gross_amount: totalHarga,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: nama,
        phone: whatsapp,
        address: alamat,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      // transaction token
      let transactionToken = transaction.token;
      console.log("transactionToken:", transactionToken);
      res.json({
        message: "Pesanan Berhasil",
        order: order,
        totalHarga: totalHarga,
        token: transactionToken
      });
    });


    // Mengembalikan total harga bersama dengan pesanan
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
