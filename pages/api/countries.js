/*
  API ENDPOINT
  @http://.../api/country
*/

import { data } from '../../data/_data';

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}
