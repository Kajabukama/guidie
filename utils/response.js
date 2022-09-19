const express = require("express");
const httpCodes = require("./../constants/http.codes");

export const notFoundResponse = (response) => {
  return response.status(404).json({
    message: "Sorry, we could not find the resources your requested",
    code: httpCodes.NOT_FOUND,
    status: false,
  });
};

export const successResponse = (data, response) => {
  return response.status(httpCodes.SUCCESS).json({
    message: "list of items",
    code: httpCodes.SUCCESS,
    status: true,
    data: data,
  });
};
