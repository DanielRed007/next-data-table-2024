type ErrorResponse = {
  error: {
    message: string;
    msg: string;
    reason: any;
  };
  msg: string;
};

export const errorHandler = (error: ErrorResponse) => {
  if (error.error.message.includes("connect ECONNREFUSED")) {
    throw new Error(
      "Internal Server Error - No current connection with server"
    );
  }
};
