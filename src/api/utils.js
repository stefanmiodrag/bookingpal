/**
 * Combination of checkOk() and getJSON(). Will check if ok and return JSON.
 *
 * @param {Object} res Fetch result object
 * @returns {Object|Promise} Will return the json object or rejected Promise if
 * not ok or bad JSON.
 */
export const checkOkAndJSON = res => checkOk(res).then(getJSON);

/**
 * Checks if the fetch result is flagged "OK".
 *
 * @param {Object} res Fetch result object
 * @returns {Promise} Returns a resolved promise if OK and rejected if not
 */
export const checkOk = res => {
    if (res.ok) {
        return Promise.resolve(res);
    }

    return Promise.reject(res);
};

/**
 * Takes a fetch result object, checks if it has a json header and tries to
 * convert the payload to json.
 *
 * @param {Object} res Fetch result object
 * @returns {Object|Promise} Returns a json object or a rejected Promise with
 * the result object
 */
export const getJSON = res => {
    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return res.json();
    }

    return Promise.reject(res);
};