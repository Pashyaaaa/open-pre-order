import db from "../models/index.js";
const OrderDetail = db.models.order_detail;
const Catalog = db.models.catalog;

export const getOrderDetail = async (req, res) => {
  try {
    const response = await OrderDetail.findAll({
      include: [
        {
          model: Catalog,
          as: "catalog",
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getOrderDetailById = async (req, res) => {
  try {
    const response = await OrderDetail.findAll({
      include: [
        {
          model: Catalog,
          as: "catalog",
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
