/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright darkyanis 2024 All rights reserved
 * @author darkyanis <yanisrayanhammouche@gmail.com>
 */

'use strict';

const api_key = "9967fafade47dfdb08616e83012b1522"

/**
 * Fetch data from server
 * @param {string} URL 
 * @param {Function} callback
 */

export const fetchData = function (URL, callback) {
 fetch(`${URL}&appid=${api_key}`)
    .then(res = res.json)
    .then(data = callback(data));
}