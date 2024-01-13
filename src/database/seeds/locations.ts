import { Knex } from "knex";

const TABLE_NAME = "locations";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          latitude: 0,
          longitude: 0,
          city: "dummy",
          country: "dummy",
        },
        {
          latitude: -79.62788889304748,
          longitude: 135.67356040553807,
          city: "vRD5NSF4II",
          country: "IlnTHJGaT8ZzM3j",
        },
        {
          latitude: 43.43489444469719,
          longitude: 54.82501899158024,
          city: "LsUtv1fIBp",
          country: "XVjbrsoH6HiKrYe",
        },
        {
          latitude: -20.65059600116861,
          longitude: 101.29050489265097,
          city: "5htTs24K4x",
          country: "BEhZl8SuMTKHNlU",
        },
        {
          latitude: -62.51712243052185,
          longitude: -148.870479369896,
          city: "zkqJBSA93A",
          country: "eQrS6pB5gRxZoix",
        },
        {
          latitude: -14.685477083551348,
          longitude: -47.771173666898875,
          city: "R4QniM1gz6",
          country: "RJhl4bj7aMMWG1b",
        },
        {
          latitude: -16.77685757160056,
          longitude: 17.809292127770334,
          city: "A62JsI2mN2",
          country: "pKheMMSGHhlQpXm",
        },
        {
          latitude: 42.52127970085678,
          longitude: -81.02689969959758,
          city: "fsrCn1CRo8",
          country: "IHE8ewuSPhc1PzA",
        },
        {
          latitude: -67.13258126468621,
          longitude: 156.6736139948485,
          city: "UTldK9o2H7",
          country: "kaFdduUCaev2BwW",
        },
        {
          latitude: -3.439388021820136,
          longitude: -132.4925419957313,
          city: "JwIPX7Haot",
          country: "WY7js1F2VPa7mkN",
        },
        {
          latitude: -26.970857195332783,
          longitude: 135.90266014957825,
          city: "jtHvsV0CLk",
          country: "bLXItXoNJtxobWH",
        },
        {
          latitude: 56.968822960544486,
          longitude: -94.83081094249323,
          city: "Zgv1RlG2aV",
          country: "KhKqAAoZQrMNp1D",
        },
        {
          latitude: 42.32367950264759,
          longitude: -3.8526476051110308,
          city: "dsbqvk0McP",
          country: "x81k0YKXIOW7mgL",
        },
        {
          latitude: 64.68042724969118,
          longitude: -39.41905107407263,
          city: "FOIYIWt76J",
          country: "n665n6Wjb1VtEYH",
        },
        {
          latitude: 76.20283637653688,
          longitude: 69.16212215760638,
          city: "LPwcK2JCRv",
          country: "Y3RBgOVvbJMf5uY",
        },
        {
          latitude: -12.067629333171851,
          longitude: -73.39050586397205,
          city: "ISr7pE0zlA",
          country: "PH9Mxl9gCacCUMn",
        },
        {
          latitude: 0.7395835711355829,
          longitude: -47.22505385178491,
          city: "KvViykBilu",
          country: "DWmIqKivl7r6vvz",
        },
        {
          latitude: 71.25612173483128,
          longitude: -61.80988033151421,
          city: "cpVbVdyDU9",
          country: "3wHHpFTUNjC99XR",
        },
        {
          latitude: -11.356037968149522,
          longitude: -107.68429418543116,
          city: "eumYeQCLmQ",
          country: "pwQCXJNyr64cdJw",
        },
        {
          latitude: 7.506868041993812,
          longitude: 67.78328369812525,
          city: "EUFi7NjmIb",
          country: "obwkdAdyhSaWFEi",
        },
        {
          latitude: -77.53572267821635,
          longitude: -126.81408167887119,
          city: "EMxMtsfVJP",
          country: "xIIdOTrH6wE3ln6",
        },
        {
          latitude: -83.67639466404663,
          longitude: 16.25223163377447,
          city: "TlusN1CGiT",
          country: "uMTEOEToO4SQu03",
        },
        {
          latitude: -18.83437828061423,
          longitude: 33.355826181040044,
          city: "QhXZld9XIA",
          country: "qVRQYqRCK3b3cQY",
        },
        {
          latitude: -75.60136122444084,
          longitude: -104.1425684287073,
          city: "Gcg6mOc2Sb",
          country: "pkeA56KsDc9yNQm",
        },
        {
          latitude: -59.100266751203414,
          longitude: 43.899571972675034,
          city: "j7z6Y3i0QX",
          country: "BNZU156QdKKdJrj",
        },
        {
          latitude: 88.48849714496023,
          longitude: -178.3133654482195,
          city: "xPUHglvOZD",
          country: "uc6tgGqEdTFTEfW",
        },
        {
          latitude: -69.42010209750212,
          longitude: 21.271196233620003,
          city: "XDtUfIX8rk",
          country: "P4hqBHp3Nta2Sqd",
        },
        {
          latitude: -73.4783250046957,
          longitude: 103.8111726028182,
          city: "LhfOsBDF5n",
          country: "CytPHxuTlj1Lxmq",
        },
        {
          latitude: -34.57400704311709,
          longitude: -1.2570924167517035,
          city: "NLF2GxsTy0",
          country: "Vu4h7b0nPtaU21F",
        },
        {
          latitude: -76.15426844268985,
          longitude: 154.9127159354947,
          city: "RcE1mqLFN4",
          country: "9VUreHZDXnAQMEu",
        },
        {
          latitude: -71.79036037743558,
          longitude: 167.58958272797713,
          city: "EWmd94DOBT",
          country: "y8dzTtrbt97UndP",
        },
      ]);
    });
}
