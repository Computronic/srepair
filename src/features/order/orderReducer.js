import { createReducer } from "../../app/common/util/reducerUtil";
import * as actions from "./orderConstants";

const initialState = [
  {
    id: "1",
    type: "Local",
    priority: "Normal",
    date: "2018-03-27",
    createdById: "1",
    createdByName: "Sandra Barrientos",
    states: [
      {
        date: "27-03-2018",
        state: "Recived"
      },
      {
        date: "28-03-2018",
        state: "Completed"
      }
    ],
    clientId: "1",
    clientName: "Pablo",
    clientLastname: "Barrientos",
    clientPhone: "3814400616",
    clientEmail: "",
    clientCity: "San Miguel de Tucumán",
    clientAddress: "Matienzo812",
    units: [
      {
        unitId: "1",
        unitDescription: "Notebook Bangho",
        unitBrand: "",
        unitModel: "",
        unitSerialNumber: "",
        unitCategory: "Notebook"
      },
      {
        unitId: "2",
        unitDescription: "Desktop Clon",
        unitBrand: "",
        unitModel: "",
        unitSerialNumber: "",
        unitCategory: "Desktop"
      }
    ],
    problem: "Enciende y no arranca",
    observations: "Visagra izquierda dañada, Clave: AbCdE12345",
    accesories: "C/Fuente y S/Cable 220V",
    parts: [
      {
        code: "klsajfhfklgh",
        quantity: 1,
        item: "DISCO RÍGIDO 2,5 1TB WD BLUE",
        rate: 2272.73,
        tax: 477.27,
        amount: 2750
      }
    ],
    priceParts: 2272.73,
    taxParts: 477.27,
    budget: "",
    priceBudget: 0,
    taxBudget: 0,
    report: "",
    repairedBy: [
      {
        technicianId: 1,
        technician: "Pablo Barrientos",
        price: 661.16,
        tax: 138.84,
        amount: 800
      }
    ],
    priceRepairs: 661.16,
    taxRepairs: 138.84
  },
  {
    id: "2",
    type: "Local",
    priority: "Normal",
    date: "2018-03-28",
    states: [
      {
        date: "28-03-2018",
        state: "Recived"
      }
    ],
    createdById: "1",
    createdByName: "Sandra Barrientos",
    clientId: "2",
    clientName: "Laura",
    clientLastname: "Barrientos",
    clientPhone: "3814111222",
    clientEmail: "",
    clientCity: "San Miguel de Tucumán",
    clientAddress: "Matienzo 812",
    units: [
      {
        unitId: "2",
        unitDescription: "PC Noblex",
        unitBrand: "",
        unitModel: "",
        unitSerialNumber: "",
        unitCategory: "PC"
      }
    ],
    problem: "Pantalla Azul",
    observations: "",
    accesories: "",
    parts: [],
    priceParts: 0,
    taxParts: 0,
    budget: "",
    priceBudget: 0,
    taxBudget: 0,
    report: "",
    repairedBy: [],
    priceRepairs: 0,
    taxRepairs: 0
  }
];

export const createOrder = (state, payload) => {
  return [...state, Object.assign({}, payload.order)];
};

export const updateOrder = (state, payload) => {
  return [
    ...state.filter(order => order.id !== payload.order.id),
    Object.assign({}, payload.order)
  ];
};

export const deleteOrder = (state, payload) => {
  return [...state.filter(order => order.id !== payload.orderId)];
};

export default createReducer(initialState, {
  [actions.CREATE_ORDER]: createOrder,
  [actions.UPDATE_ORDER]: updateOrder,
  [actions.DELETE_ORDER]: deleteOrder
});
