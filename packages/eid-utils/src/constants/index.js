import { MIDDLEWARE, CHROME_EXTENSION, APPLET } from "./api";

import {
	OK,
	SERVICE_NOT_RUNNING,
	INTERNAL_SERVICE_ERROR,
	SERVICE_OUT_OF_DATE,
	EXTENSION_NOT_INSTALLED,
	NATIVE_APP_NOT_INSTALLED,
	SANDBOXED,
} from "./statusCodes";

import {
	INCORRECT_CARD_INSERTED,
	CARD_INCORRECT_INSERTED,
	CORRECT_CARD_INSERTED,
	CORRECT_CARD_REMOVED,
	INCORRECT_INSERTED_CARD_REMOVED,
	INCORRECT_CARD_REMOVED,
	NO_CARD_READER_FOUND,
	CARD_READER_CONNECTED,
	CARD_READER_DISCONNECTED,
} from "./events";

import {
	PIN_PAD,
} from "./features";


export const API = {
	MIDDLEWARE,
	CHROME_EXTENSION,
	APPLET,
};

export const Features = {
	PIN_PAD,
};

export const StatusCodes = {
	OK,
	SERVICE_NOT_RUNNING,
	INTERNAL_SERVICE_ERROR,
	SERVICE_OUT_OF_DATE,
	EXTENSION_NOT_INSTALLED,
	NATIVE_APP_NOT_INSTALLED,
	SANDBOXED,
};

export const Events = {
	INCORRECT_CARD_INSERTED,
	CARD_INCORRECT_INSERTED,
	CORRECT_CARD_INSERTED,
	CORRECT_CARD_REMOVED,
	INCORRECT_INSERTED_CARD_REMOVED,
	INCORRECT_CARD_REMOVED,
	NO_CARD_READER_FOUND,
	CARD_READER_CONNECTED,
	CARD_READER_DISCONNECTED,
};
